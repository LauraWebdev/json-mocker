import text from "./text.js";
import internet from "./internet.js";
import person from "./person.js";
import general from "./general.js";
import color from "./color.js";
import finance from "./finance.js";
import system from "./system.js";
import location from "./location.js";
import date from "./date.js";

export const useablesMap = {
    ...general,
    ...text,
    ...person,
    ...internet,
    ...date,
    ...location,
    ...finance,
    ...system,
    ...color,
};

export const executeUseable = (input) => {
    if (input.startsWith('loop(')) {
        // Loop Useable
        const loopMatch = input.match(/loop\((\d+)(?:,(\d+))?\)/);
        if (loopMatch) {
            const min = parseInt(loopMatch[1], 10);
            const max = loopMatch[2] ? parseInt(loopMatch[2], 10) : min;

            // Generate a random number between min and max (inclusive)
            const randomLoop = Math.floor(Math.random() * (max - min + 1)) + min;

            return { loop: randomLoop };
        }
    }

    const useableMatch = input.match(/(\w+)(?:\((.*?)\))?/);
    if (useableMatch) {
        const useableName = useableMatch[1];
        const params = useableMatch[2] ? useableMatch[2].split(',').map(param => param.trim()) : [];
        if (useablesMap[useableName]) {
            return [useablesMap[useableName].action(...params), useablesMap[useableName].type ?? 'string'];
        }
    }
    return input;
}

export const interpretUseables = (inputObject) => {
    if (Array.isArray(inputObject)) {
        // Traverse Array
        const returnArray = [];
        let i = 0;
        while (i < inputObject.length) {
            const item = inputObject[i];
            if (typeof item === 'string' && item.startsWith('loop')) {
                // Loop Useable
                const result = executeUseable(item);
                if (result.loop && i < inputObject.length - 1) {
                    for (let j = 0; j < result.loop; j++) {
                        returnArray.push(interpretUseables(inputObject[i + 1]));
                    }
                    i += 2;
                } else {
                    i++;
                }
            } else {
                // Traverse Array
                returnArray.push(interpretUseables(item));
                i++;
            }
        }
        return returnArray;
    } else if (typeof inputObject === 'object' && inputObject !== null) {
        // Traverse Object
        const returnObject = {};
        for (const key in inputObject) {
            returnObject[key] = interpretUseables(inputObject[key]);
        }
        return returnObject;
    } else if (typeof inputObject === 'string') {
        let type = null;
        const replaced = inputObject.replace(/{(.*?)}/g, (fullMatch, match) => {
            let [useableResult, useableType] = executeUseable(match);

            // Set type to useableType if the only value, otherwise set to string
            if(inputObject === fullMatch) {
                type = useableType.name;
            } else {
                type = String.name;
            }

            return useableResult;
        });

        // Return parsed to type
        switch(type ?? String.name) {
            default:
                return replaced;
            case Boolean.name:
                return replaced === "true";
            case Number.name:
                return parseFloat(replaced);
            case Date.name:
                return new Date(replaced).toJSON();
        }
    }
    return inputObject;
}
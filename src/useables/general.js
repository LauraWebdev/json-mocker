import {faker} from "@faker-js/faker";

export default {
    'uuid': {
        action: () => faker.string.uuid(),
        group: 'General',
        explanation: 'Returns a UUID v4',
        usage: 'uuid()',
        example: faker.string.uuid(),
    },
    'enum': {
        action: (...args) => {
            return args[Math.floor(Math.random() * args.length)];
        },
        group: 'General',
        explanation: 'Returns one of the set strings',
        usage: 'enum(active, inactive, banned, locked)',
        example: 'active',
    },
    'boolean': {
        action: () => faker.datatype.boolean(),
        group: 'General',
        explanation: 'Returns a boolean',
        usage: 'boolean()',
        example: faker.datatype.boolean(),
        type: Boolean,
    },
    'float': {
        action: (min = null, max = null, precision = null) => faker.number.float({
            min: min ? parseFloat(min) : undefined,
            max: max ? parseFloat(max) : undefined,
            precision: precision ? parseFloat(precision) : undefined,
        }),
        group: 'General',
        explanation: 'Returns a float',
        usage: 'float()',
        example: faker.number.float(),
        type: Number,
    },
    'floatRange': {
        action: (min = null, max = null) => faker.number.float({
            min: min ? parseFloat(min) : undefined,
            max: max ? parseFloat(max) : undefined,
        }),
        group: 'General',
        explanation: 'Returns a float between a range',
        usage: 'float(min, max)',
        example: faker.number.float(),
        type: Number,
    },
    'int': {
        action: () => faker.number.int(),
        group: 'General',
        explanation: 'Returns an integer',
        usage: 'int()',
        example: faker.number.int(),
        type: Number,
    },
};
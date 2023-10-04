import {faker} from "@faker-js/faker";

export default {
    'currencyAmount': {
        action: () => faker.finance.amount(),
        group: 'Finance',
        explanation: 'Returns an amount of currency',
        usage: 'currencyAmount()',
        example: faker.finance.amount(),
    },
    'currencyCode': {
        action: () => faker.finance.currencyCode(),
        group: 'Finance',
        explanation: 'Returns the code of a currency',
        usage: 'currencyCode()',
        example: faker.finance.currencyCode(),
    },
    'currencySymbol': {
        action: () => faker.finance.currencySymbol(),
        group: 'Finance',
        explanation: 'Returns the code of a currency',
        usage: 'currencySymbol()',
        example: faker.finance.currencySymbol(),
    },
    'iban': {
        action: () => faker.finance.iban(),
        group: 'Finance',
        explanation: 'Returns an iban',
        usage: 'iban()',
        example: faker.finance.iban(),
    },
    'creditCardCVV': {
        action: () => faker.finance.creditCardCVV(),
        group: 'Finance',
        explanation: 'Returns a CVV of a credit card',
        usage: 'creditCardCVV()',
        example: faker.finance.creditCardCVV(),
    },
    'creditCardIssuer': {
        action: () => faker.finance.creditCardIssuer(),
        group: 'Finance',
        explanation: 'Returns an issuer of a credit card',
        usage: 'creditCardIssuer()',
        example: faker.finance.creditCardIssuer(),
    },
    'creditCardNumber': {
        action: () => faker.finance.creditCardNumber(),
        group: 'Finance',
        explanation: 'Returns a number of a credit card',
        usage: 'creditCardNumber()',
        example: faker.finance.creditCardNumber(),
    },
};
import {faker} from "@faker-js/faker";

export default {
    'timeZone': {
        action: () => faker.location.timeZone(),
        group: 'Date',
        explanation: 'Returns a timezone',
        usage: 'timeZone()',
        example: faker.location.timeZone(),
    },
    'date': {
        action: () => faker.date.anytime(),
        group: 'Date',
        explanation: 'Returns a date',
        usage: 'date()',
        example: faker.date.anytime().toJSON(),
        type: Date,
    },
    'datePast': {
        action: () => faker.date.past(),
        group: 'Date',
        explanation: 'Returns a date in the past',
        usage: 'datePast()',
        example: faker.date.past().toJSON(),
        type: Date,
    },
    'dateFuture': {
        action: () => faker.date.future(),
        group: 'Date',
        explanation: 'Returns a date in the future',
        usage: 'dateFuture()',
        example: faker.date.future().toJSON(),
        type: Date,
    },
    'dateRange': {
        action: (min, max) => faker.date.between({
            from: min,
            to: max,
        }),
        group: 'Date',
        explanation: 'Returns a date between two dates',
        usage: 'date(min, max)',
        example: faker.date.anytime().toJSON(),
        type: Date,
    },
};
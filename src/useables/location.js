import {faker} from "@faker-js/faker";

export default {
    'city': {
        action: () => faker.location.city(),
        group: 'Location',
        explanation: 'Returns a city',
        usage: 'city()',
        example: faker.location.city(),
    },
    'country': {
        action: () => faker.location.country(),
        group: 'Location',
        explanation: 'Returns a country',
        usage: 'country()',
        example: faker.location.country(),
    },
    'countryCode': {
        action: () => faker.location.countryCode(),
        group: 'Location',
        explanation: 'Returns a country code',
        usage: 'countryCode()',
        example: faker.location.countryCode(),
    },
    'county': {
        action: () => faker.location.county(),
        group: 'Location',
        explanation: 'Returns a county',
        usage: 'county()',
        example: faker.location.county(),
    },
    'latitude': {
        action: () => faker.location.latitude(),
        group: 'Location',
        explanation: 'Returns a latitude',
        usage: 'latitude()',
        example: faker.location.latitude(),
    },
    'longitude': {
        action: () => faker.location.longitude(),
        group: 'Location',
        explanation: 'Returns a longitude',
        usage: 'longitude()',
        example: faker.location.longitude(),
    },
    'street': {
        action: () => faker.location.street(),
        group: 'Location',
        explanation: 'Returns a street',
        usage: 'street()',
        example: faker.location.street(),
    },
    'streetAddress': {
        action: () => faker.location.streetAddress(),
        group: 'Location',
        explanation: 'Returns a full street address',
        usage: 'streetAddress()',
        example: faker.location.streetAddress(),
    },
    'secondaryAddress': {
        action: () => faker.location.secondaryAddress(),
        group: 'Location',
        explanation: 'Returns a secondary address',
        usage: 'secondaryAddress()',
        example: faker.location.secondaryAddress(),
    },
    'zipCode': {
        action: () => faker.location.zipCode(),
        group: 'Location',
        explanation: 'Returns a zip code',
        usage: 'zipCode()',
        example: faker.location.zipCode(),
    },
};
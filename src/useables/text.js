import {faker} from "@faker-js/faker";

export default {
    'words': {
        action: (count) => faker.lorem.words(parseInt(count)),
        group: 'Text',
        explanation: 'Returns words joined by a space',
        usage: 'words(count)',
        example: faker.lorem.words(5),
    },
    'paragraph': {
        action: (count) => faker.lorem.paragraph(parseInt(count)),
        group: 'Text',
        explanation: 'Returns a paragraph with a set number of sentences',
        usage: 'paragraph(count)',
        example: faker.lorem.paragraph(2),
    },
    'slug': {
        action: (count) => faker.lorem.slug(parseInt(count)),
        group: 'Text',
        explanation: 'Returns a slug with a set number of words',
        usage: 'slug(count)',
        example: faker.lorem.slug(5),
    },
    'companyName': {
        action: () => faker.company.name(),
        group: 'Text',
        explanation: 'Returns a company name',
        usage: 'companyName()',
        example: faker.company.name(),
    },
};
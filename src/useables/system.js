import {faker} from "@faker-js/faker";

export default {
    'commonFileExtension': {
        action: () => faker.system.commonFileExt(),
        group: 'System',
        explanation: 'Returns a common file extension',
        usage: 'commonFileExtension()',
        example: faker.system.commonFileExt(),
    },
    'commonFileName': {
        action: () => faker.system.commonFileName(),
        group: 'System',
        explanation: 'Returns a common file name',
        usage: 'commonFileName()',
        example: faker.system.commonFileName(),
    },
    'commonFileType': {
        action: () => faker.system.commonFileType(),
        group: 'System',
        explanation: 'Returns a common file type',
        usage: 'commonFileType()',
        example: faker.system.commonFileType(),
    },
    'fileExtension': {
        action: () => faker.system.fileExt(),
        group: 'System',
        explanation: 'Returns a file extension',
        usage: 'fileExtension()',
        example: faker.system.fileExt(),
    },
    'fileName': {
        action: () => faker.system.fileName(),
        group: 'System',
        explanation: 'Returns a file name',
        usage: 'fileName()',
        example: faker.system.fileName(),
    },
    'fileType': {
        action: () => faker.system.fileType(),
        group: 'System',
        explanation: 'Returns a file type',
        usage: 'fileType()',
        example: faker.system.fileType(),
    },
    'mimeType': {
        action: () => faker.system.mimeType(),
        group: 'System',
        explanation: 'Returns a mime type',
        usage: 'mimeType()',
        example: faker.system.mimeType(),
    },
    'semver': {
        action: () => faker.system.semver(),
        group: 'System',
        explanation: 'Returns a semantic version number',
        usage: 'semver()',
        example: faker.system.semver(),
    },
};
import {faker} from "@faker-js/faker";

export default {
    'cmyk': {
        action: () => faker.color.cmyk(),
        group: 'Color',
        explanation: 'Returns a color as CMYK',
        usage: 'cmyk()',
        example: faker.color.cmyk(),
    },
    'hsl': {
        action: () => faker.color.hsl(),
        group: 'Color',
        explanation: 'Returns a color as HSL',
        usage: 'hsl()',
        example: faker.color.hsl(),
    },
    'hwb': {
        action: () => faker.color.hwb(),
        group: 'Color',
        explanation: 'Returns a color as HWB',
        usage: 'hwb()',
        example: faker.color.hwb(),
    },
    'lab': {
        action: () => faker.color.lab(),
        group: 'Color',
        explanation: 'Returns a color as LAB',
        usage: 'lab()',
        example: faker.color.lab(),
    },
    'lch': {
        action: () => faker.color.lch(),
        group: 'Color',
        explanation: 'Returns a color as LCH',
        usage: 'lch()',
        example: faker.color.lch(),
    },
    'hex': {
        action: () => faker.color.rgb({ format: 'hex' }),
        group: 'Color',
        explanation: 'Returns a color as HEX',
        usage: 'hex()',
        example: faker.color.rgb({ format: 'hex' }),
    },
    'rgb': {
        action: () => faker.color.rgb({ format: 'decimal' }),
        group: 'Color',
        explanation: 'Returns a color as RGB',
        usage: 'rgb()',
        example: faker.color.rgb({ format: 'decimal' }),
    },
    'rgba': {
        action: () => faker.color.rgb({ format: 'decimal', includeAlpha: true }),
        group: 'Color',
        explanation: 'Returns a color as RGBA',
        usage: 'rgba()',
        example: faker.color.rgb({ format: 'decimal', includeAlpha: true }),
    },
};
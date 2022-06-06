const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
    preset: 'ts-jest',
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testEnvironment: "jest-environment-jsdom-sixteen",
    testRegex: "\\.test\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
    clearMocks: true,
    verbose: true,
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths , {
        // This has to match the baseUrl defined in tsconfig.json.
        prefix: 'src'
    }),
    projects: [
        "packages/*"
    ],
    collectCoverageFrom: [
        "packages/*/src/**/*.{js,jsx,ts,tsx}"
    ],
};

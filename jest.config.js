module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ["./jest.setup.js"],
    moduleNameMapper: {
        '^.+\\.(css|less)$': '<rootDir>/cssstub.js'
    }
};
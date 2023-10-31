module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleDirectories: ['node_modules', './src/test'],
  setupFiles: ['<rootDir>/src/test/jestSetup.ts'],
  modulePathIgnorePatterns: ['.*/mockedData/.*'],
  collectCoverageFrom: [
    'src/{components,utils,hooks,domain}/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
  ],
};

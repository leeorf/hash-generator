const path = require('node:path');

module.exports = {
  rootDir: path.resolve(__dirname, '..'),
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/__tests__/e2e',
  ],
  roots: ['<rootDir>/src', '<rootDir>/__tests__/unit'],
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/client/$1',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  coverageDirectory: 'coverage',
};

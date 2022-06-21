const path = require('node:path');

module.exports = {
  rootDir: path.resolve(__dirname, '..'),
  roots: ['<rootDir>/__tests__'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/__tests__/e2e',
  ],
  testMatch: ['<rootDir>/**/*.test.ts?(x)'],
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '@package': '<rootDir>/package.json',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  coverageDirectory: 'coverage',
};

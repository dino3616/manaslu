const createConfig = require('next/jest')({
  dir: './',
});

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createConfig(config);

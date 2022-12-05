const removeImports = require('next-remove-imports');
const transpileModules = require('next-transpile-modules')(['@manaslu/client']);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = removeImports()(transpileModules(nextConfig));

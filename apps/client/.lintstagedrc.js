module.exports = {
  '**/*.{js,ts,tsx,json}': (/** @type {string[]} */ filenames) => `pnpm eslint --fix ${filenames.join(' --fix ')}`,
  '**/*.{js,ts,tsx,json}': (/** @type {string[]} */ filenames) =>
    `pnpm prettier --check ${filenames.join(' --check ')} --write ${filenames.join(' --write ')}`,
  '**/*.{css,scss}': (/** @type {string[]} */ filenames) => `pnpm stylelint --fix ${filenames.join(' --fix ')}`,
};

module.exports = {
  '**/*.{js,ts,tsx,json}': (filenames) => `yarn lint:fix --file ${filenames.map((file) => file.split(process.cwd())[1]).join(' --file ')}`,
  '**/*.{js,ts,tsx,json}': (filenames) => `yarn fmt:fix --file ${filenames.map((file) => file.split(process.cwd())[1]).join(' --file ')}`,
  '**/*.{css,scss}': 'yarn style:fix',
};

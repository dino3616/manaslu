module.exports = {
  '**/*.{js,ts,json}': (filenames) => `yarn lint:fix --file ${filenames.map((file) => file.split(process.cwd())[1]).join(' --file ')}`,
  '**/*.{js,ts,json}': (filenames) => `yarn fmt:fix --file ${filenames.map((file) => file.split(process.cwd())[1]).join(' --file ')}`,
};

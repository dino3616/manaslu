/** @type {import("stylelint").Config} */
module.exports = {
  plugins: ['stylelint-prettier'],
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order', 'stylelint-prettier/recommended', 'stylelint-config-prettier'],
};

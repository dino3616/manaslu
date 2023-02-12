/** @type {import('eslint').Linter.Config} */
module.exports = {
  $schema: "https://json.schemastore.org/eslintrc",
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: ["eslint:recommended", "prettier", "plugin:json/recommended"],
  plugins: ["import", "prettier", "json"],
  rules: {
    "json/*": ["error", "allowComments"],
    "import/no-default-export": "error",
    "import/no-extraneous-dependencies": ["error", { packageDir: ["./"] }],
    "import/order": [
      "error",
      {
        pathGroups: [
          {
            pattern: "@/**",
            group: "internal",
            position: "before",
          },
        ],
        alphabetize: {
          order: "asc",
        },
      },
    ],
    "import/prefer-default-export": "off",
    "no-useless-constructor": "off",
  },
  overrides: [
    {
      files: ["./*"],
      rules: {
        "import/no-default-export": "off",
        "import/prefer-default-export": "off",
      },
    },
  ],
};

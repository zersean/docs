/** @type {import("@trivago/prettier-plugin-sort-imports").PrettierConfig} */
const config = {
  printWidth: 130,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: '*.mdx',
      options: {
        printWidth: 90,
      },
    },
  ],
};

export default config;

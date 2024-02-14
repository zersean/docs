/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['eslint:recommended', 'prettier', 'plugin:mdx/recommended', 'plugin:@next/next/recommended', 'next'],
  globals: {
    JSX: true,
    React: true,
    NodeJS: true,
  },
  overrides: [
    {
      files: ['pages/**/*.mdx'],
      extends: ['plugin:mdx/recommended'],
      settings: {
        'mdx/code-blocks': true,
      },
      rules: {
        'no-unused-expressions': 'off',
      },
    },
  ],
};

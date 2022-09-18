/**
 * Prettier configuration
 * @see https://prettier.io
 */

module.exports = {
  printWidth: 120,
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  overrides: [
    /**
     * @prettier/plugin-pug
     * @see https://github.com/prettier/plugin-pug
     */
    {
      files: '*.pug',
      options: {
        parser: 'pug',
        singleQuote: false,
        attributeSeparator: 'as-needed',
      },
    },
  ],
}

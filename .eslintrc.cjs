require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    '@vue/eslint-config-airbnb',
    'plugin:cypress/recommended',
  ],

  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',

    parser: {
      ts: '@typescript-eslint/parser',
      '<template>': 'espree',
    },
  },
  plugins: ['vue', '@typescript-eslint', 'cypress'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    'vue/prefer-import-from-vue': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'object-curly-newline': 'off',
    'linebreak-style': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-plusplus': 'off',
    'operator-linebreak': 'off',
  },
};

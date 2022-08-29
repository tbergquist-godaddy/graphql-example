module.exports = {
  extends: '@ux/eslint-config',
  env: {
    jest: true,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  globals: {
    JSX: true,
  },
  rules: {
    'react/jsx-no-literals': 'off',
  },
};

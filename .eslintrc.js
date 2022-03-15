module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-console': 'warn',
    'react/prop-types': 0,
    'no-case-declarations': 0,
  },
  settings: {
    react: {
      Pragma: 'React',
      version: '16.9.0',
    },
  },
  globals: {
    process: 'readonly',
  },
  plugins: ['react'],
}

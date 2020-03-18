module.exports = {
 parser: 'babel-eslint',
 env: {
  browser: true,
  es6: true,
  node: true,
 },
 extends: ['airbnb-base', 'plugin:prettier/recommended'],
 rules: {
  'react/jsx-one-expression-per-line': 'off',
  'react/react-in-jsx-scope': 'off',
  'react/jsx-filename-extension': 'off',
  'no-unused-vars': 'off',
 },
 plugins: ['jsx-a11y'],
}

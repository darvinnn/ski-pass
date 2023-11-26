module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    quotes: ['warn', 'single'],
    'react/react-in-jsx-scope': 0,
    'react/display-name': 0,
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'jsx-quotes': ['warn', 'prefer-double'],
    'no-console': 'warn',
    'prefer-const': 'warn',
    'eol-last': 'warn',
    semi: ['warn', 'always'],
    'comma-dangle': ['warn', 'always-multiline'],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};

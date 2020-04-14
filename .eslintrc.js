module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    "prettier/@typescript-eslint",
    'plugin:prettier/recommended',
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: false,
        trailingComma: 'none',
        singleQuote: true
      }
    ],
    'react/prop-types': [
      1,
      {
        ignore: ['context', 'tracking'],
      },
    ],
  },
  settings: {
    "react": {
      "version": "detect",
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
};
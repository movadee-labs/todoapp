/* eslint-env node */
module.exports = {
  root: true,
  ignorePatterns: ['dist/', 'out-tsc/', '.angular/', 'node_modules/', 'coverage/', '**/*.min.js'],
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.app.json', './tsconfig.spec.json'],
        sourceType: 'module'
      },
      plugins: ['@typescript-eslint', '@angular-eslint', 'import', 'prettier'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@angular-eslint/recommended',
        'plugin:import/recommended',
        'plugin:prettier/recommended',
        'prettier'
      ],
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts']
        },
        'import/resolver': {
          typescript: {
            project: [
              './tsconfig.json',
              './tsconfig.app.json',
              './tsconfig.spec.json'
            ]
          }
        }
      },
      rules: {
        'prettier/prettier': 'warn',
        'import/order': [
          'warn',
          {
            groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
            'newlines-between': 'always',
            alphabetize: { order: 'asc', caseInsensitive: true }
          }
        ],
        '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }]
      }
    },
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {}
    },
    {
      files: ['*.spec.ts'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      env: { jest: true },
      rules: {
        'jest/no-focused-tests': 'error'
      }
    }
  ]
};



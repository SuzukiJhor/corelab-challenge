module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
   
     // Regras específicas do React
     'react/prop-types': 'off', // Desativar a verificação de prop-types se estiver usando TypeScript
     'react/react-in-jsx-scope': 'off', // Não é necessário importar React no escopo global com a versão mais recente do React
 
     // Outras regras
     'no-console': 'warn', // Apenas um aviso para console.log, etc.
     'no-unused-vars': 'warn', // Apenas um aviso para variáveis não utilizadas
     'react-hooks/rules-of-hooks': 'error', // Verifica as regras dos Hooks
     'react-hooks/exhaustive-deps': 'warn', // Verifica o array de dependências
     "prettier/prettier": "error"
  },
}

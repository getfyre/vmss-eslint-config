module.exports = {
    extends: [
        'airbnb-base',
        'plugin:prettier/recommended',
        'prettier'
    ],
    parserOptions: {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    plugins: ['prettier'],
    rules: {
        'quotes': ['error', 'single', {'avoidEscape': true}],
        'prefer-const': 'warn',
        'no-unreachable': 'error',
        'no-console': 'warn',
        'no-unused-vars': 'warn',
        'indent': ['error', 4, {'MemberExpression': 'off', 'SwitchCase': 1}],
        'prefer-arrow-callback': ['warn', {'allowNamedFunctions': true}],
        'semi': 'error',
        'keyword-spacing': ['error', {'before': true}],
        'comma-dangle': ['error', 'never'],
        'prettier/prettier': [
            'error',
            {
                trailingComma: 'none',
                tabWidth: 4,
                semi: true,
                singleQuote: true,
                bracketSpacing: true
            }
        ]
    }
};
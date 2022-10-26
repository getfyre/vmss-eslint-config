module.exports = {
    extends: [
        'airbnb-base',
        'plugin:prettier/recommended',
        'prettier'
    ],
    rules: {
        'quotes': ['error', 'single', { 'avoidEscape': true }],
        'prefer-const': 'warn',
        'no-unreachable': 'error',
        'prefer-arrow-callback': 'warn',
        'semi': 'error',
        'keyword-spacing': ['error', {'before': true}],
        'comma-dangle': ['error', 'never'],
        'prettier/prettier': [
            'error',
            {
                trailingComma: false,
                tabWidth: 4,
                semi: false,
                singleQuote: true,
                bracketSpacing: true
            }
        ]
    },
};
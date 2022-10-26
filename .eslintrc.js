module.exports = {
    extends: [
        'airbnb-base',
        'airbnb-typescript/base',
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
        'comma-dangle': ['error', 'never']
    },
};
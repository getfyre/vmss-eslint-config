module.exports = {
    extends: [
        'airbnb-base'
    ],
    parserOptions: {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
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
        'no-underscore-dangle': 'off',
        'no-param-reassign': 'off',
        'new-cap': ['error', {'newIsCap': false}],
        'no-use-before-define': ['error', {'functions': false}]
    }
};

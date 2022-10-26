module.exports = {
    extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript',
        './.eslintrc.js',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        // This allows us to use async function on addEventListener().
        '@typescript-eslint/no-misused-promises': [
            'error',
            {
                checksVoidReturn: false,
            },
        ],
        // this is covered by the typescript compiler, so we don't need it
        'no-undef': 'off',
        'no-shadow': 'off'
    },
    parserOptions: {
        project: './tsconfig.json',
    },
};
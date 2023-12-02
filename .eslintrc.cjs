module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:react/jsx-runtime',
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: 'tsconfig.eslint.json',
    },
    plugins: [
        'react',
    ],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        semi: ['error', 'always'],
        indent: ['error', 4],
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                exports: 'always-multiline',
                functions: 'never',
                imports: 'always-multiline',
                objects: 'always-multiline',
            },
        ],
        'max-len': ['error', { code: 160 }],
    },
};

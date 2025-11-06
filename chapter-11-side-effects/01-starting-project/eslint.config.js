import reactHooks from 'eslint-plugin-react-hooks';

export default [
    {
        files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'], // Specify the files to lint
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true, // Enable JSX
                },
            },
        },
        plugins: {
            'react-hooks': reactHooks, // Import the React Hooks plugin
        },
        rules: {
            semi: 'warn', // Semicolons as warnings
            'prefer-const': 'error', // Suggest using const where possible
            'react-hooks/rules-of-hooks': 'error', // Rules for correct usage of Hooks
            'react-hooks/exhaustive-deps': 'warn', // Missing dependencies in useEffect
        },
    },
];

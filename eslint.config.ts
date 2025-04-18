import { fixupPluginRules } from '@eslint/compat';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import * as tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default {
    languageOptions: {
        ecmaVersion: 'latest',
        parser: tsParser,
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
            sourceType: 'module',
        },
        globals: {
            ...globals.browser,
        },
    },
    plugins: {
        react: reactPlugin,
        'react-hooks': fixupPluginRules(reactHooksPlugin),
        '@typescript-eslint': tsPlugin,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        ...tsPlugin.configs.recommended.rules,
        ...reactPlugin.configs['jsx-runtime'].rules,
        ...reactHooksPlugin.configs.recommended.rules,
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                args: 'all',
                argsIgnorePattern: '^_', // Allow unused variables with underscore prefix
                caughtErrors: 'all',
                caughtErrorsIgnorePattern: '^_', // Allow unused caught errors with underscore prefix
                destructuredArrayIgnorePattern: '^_', // Allow unused destructured array elements with underscore prefix
                varsIgnorePattern: '^_', // Allow unused variables with underscore prefix
                ignoreRestSiblings: true,
            },
        ],
        'react/jsx-curly-brace-presence': [
            'error',
            { props: 'always', children: 'never', propElementValues: 'always' },
        ],
        indent: ['error', 4, { SwitchCase: 1, ignoredNodes: ['PropertyDefinition'] }],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single', { avoidEscape: true }],
        semi: ['error', 'always'],
        'prefer-const': ['error'],
        'no-debugger': ['error'],
    },
};

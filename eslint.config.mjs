import js from '@eslint/js'
import nextPlugin from '@next/eslint-plugin-next'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import reactPlugin from 'eslint-plugin-react'
import reactCompilerPlugin from 'eslint-plugin-react-compiler'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

const eslintConfig = defineConfig([
    {
        name: 'project/javascript-recommended',
        files: ['**/*.{js,mjs,ts,tsx}'],
        ...js.configs.recommended,
        rules: {
            ...js.configs.recommended.rules,
            'no-console': 'warn',
        },
    },
])
 
const typescriptConfig = defineConfig([
    {
        name: 'project/typescript-strict',
        files: ['**/*.{ts,tsx,mjs}'],
        extends: [
            ...tseslint.configs.strictTypeChecked,
            ...tseslint.configs.stylisticTypeChecked,
        ],
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
                ecmaFeatures: {
                    jsx: true,
                },
                warnOnUnsupportedTypeScriptVersion: true,
            },
        },
        rules: {
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/triple-slash-reference': 'off',
        },
    },
    {
        name: 'project/javascript-disable-type-check',
        files: ['**/*.{js,mjs,cjs}'],
        ...tseslint.configs.disableTypeChecked,
    }
])
 
const ignoresConfig = defineConfig([
    {
        name: 'project/ignores',
        ignores: ['.next/', 'node_modules/', 'public/', '.vscode/', 'next-env.d.ts']
    },
])
 
const reactConfig = defineConfig([
    {
        name: 'project/react-next',
        files: ['**/*.{jsx,tsx}'],
        plugins: {
            'react': reactPlugin,
            'react-hooks': reactHooksPlugin,
            'jsx-a11y': jsxA11yPlugin,
            '@next/next': nextPlugin,
        },
        rules: {
            ...reactPlugin.configs.recommended.rules,
            ...reactPlugin.configs['jsx-runtime'].rules,
            ...reactHooksPlugin.configs['recommended-latest'].rules,
            ...jsxA11yPlugin.configs.strict.rules,
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs['core-web-vitals'].rules,
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react/no-unknown-property': 'off',
            'react/jsx-no-target-blank': 'off',
            'jsx-a11y/alt-text': ['warn', { elements: ['img'], img: ['Image'] }],
            'jsx-a11y/media-has-caption': 'warn',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    }
])

const reactCompilerConfig = defineConfig([
    {
        name: 'project/react-compiler',
        files: ['**/*.{jsx,tsx}'],
        plugins: {
            'react-compiler': reactCompilerPlugin,
        },
        rules: {
            'react-compiler/react-compiler': 'error',
        },
    },
])
 
// Add reactConfig to your export
export default defineConfig([
    ...ignoresConfig,
    ...eslintConfig,
    ...typescriptConfig,
    ...reactConfig,
    ...reactCompilerConfig,
])
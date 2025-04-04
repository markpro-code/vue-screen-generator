import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['src/**/*.{js,vue}'],
    languageOptions: { globals: globals.browser },
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    files: ['vite.config.js'],
    languageOptions: { globals: globals.node },
  },
]

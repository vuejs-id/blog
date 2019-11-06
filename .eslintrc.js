module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['plugin:vue/recommended', 'prettier', 'prettier/vue'],
  plugins: ['import', 'markdown', 'vue', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.vue']
      }
    }
  },
  rules: {
    'no-console': 'off',
    'no-param-reassign': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prettier/prettier': 'error'
  }
}

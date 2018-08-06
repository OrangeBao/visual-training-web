module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    // 'plugin:vue/essential',
    // 'eslint:recommended'
    'plugin:vue/strongly-recommended',
    'standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'vue/max-attributes-per-line': [
      //配置成可允许一行attribute跟着标签
      'off',
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}

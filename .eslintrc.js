module.exports = {
  root: true,
  env: {
    node: true
  },
  //配置 引用lodash中_ 全局可用 eslint不提示错误
  "globals":{
    "_":false
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}

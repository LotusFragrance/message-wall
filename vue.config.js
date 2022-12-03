const path = require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.join(__dirname, './src/styles/common.less')] // 引入全局less文件
    }
  }
})

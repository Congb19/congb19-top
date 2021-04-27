// webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/main.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          'vue-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      filename: 'index.html',
      title: '手搭 Vue 开发环境'
    }),
    // 添加 VueLoaderPlugin 插件
    new VueLoaderPlugin()
  ]
}

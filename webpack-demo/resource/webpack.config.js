// 引入 path 模块，因为 webpack 的输出必须是绝对路径
const { dirname } = require('path')
const path = require('path')
// require('html-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

const config = {
  // mode: 'development',
  mode: 'production',
  entry: './src/index.js',
  // output 配置输出属性
  output: {
    // 打包之后输出的文件名
    filename: 'bundle.js',
    // 打包之后输出的文件路径
    path: path.join(__dirname,'./dist') 
  },
  devServer:{
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
    // 生成的文件的名称
      filename: "index.html",
      // 要合并的模板文件
      template: "template.html"
  }),
  new webpack.HotModuleReplacementPlugin()
]


} 

module.exports = config
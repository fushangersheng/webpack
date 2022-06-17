const path = require("path")
const {join}=require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: "./src/main.js",
    output: { 
        path:join(__dirname, "dist"), 
        filename: "bundle.js" 
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
          filename: 'index.html'
        })
      ], 
      devServer: {
        port: 3000, 
        open: true
      },
      module: { 
        rules: [ // loader的规则
          {
            test: /\.css$/, // 匹配所有的css文件
            use: [ "style-loader", "css-loader"]
          }
        ]
    }
}
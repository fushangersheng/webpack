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
        rules: [ 
          {
            test: /\.css$/,
            use: [ "style-loader", "css-loader",'less-loader']
          },
          {
            test: /\.(png|jpg|gif|jpeg)$/i,
            type: 'asset'
        },
        {
            test: /\.(png|jpg|gif|jpeg)$/i,
            use: [
              {
                loader: 'url-loader', // 匹配文件, 尝试转base64字符串打包到js中
               
                options: {
                  limit: 8 * 1024,
                },
              },
            ],
          }
        ]
    }
}
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
            use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 8 * 1024,
                  },
                },
              ],
            type: 'asset'
        },
        { 
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            type: 'asset/resource',
            generator: {
                filename: 'font-[name].[hash:6][ext]'
            }
        },
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'] // 预设:转码规则(用bable开发环境本来预设的)
                }
            }
        }
        ]
    }
}
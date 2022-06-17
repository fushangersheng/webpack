const path = require("path")
const {join}=require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    mode: 'development',
    entry: "./src/main.js",
    output: { 
        path:join(__dirname, "dist"), 
        filename: "bundle.js" 
    },
    
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
                    presets: ['@babel/preset-env'] 
                }
            }
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        // 它会应用到普通的 `.js` 文件
        // 以及 `.vue` 文件中的 `<script>` 块
        {
          test: /\.js$/,
          loader: 'babel-loader'
        },
        // 它会应用到普通的 `.css` 文件
        // 以及 `.vue` 文件中的 `<style>` 块
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader'
          ]
        }
      ]
        
    },
    
}
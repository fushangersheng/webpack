const path = require("path")
const {join}=require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: "./src/main.js",
    output: { 
        path:join(__dirname, "dist"), 
        filename: "bundle.js" 
    }
}
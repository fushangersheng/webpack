const path = require("path")

module.exports = {
    entry: "./src/main.js",
    output: { 
        path: path.join(__dirname, "dist"), // 出口路径
        filename: "bundle.js" // 出口文件名
    }
}
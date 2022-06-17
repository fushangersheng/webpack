const path = require("path")
const {join}=re
module.exports = {
    entry: "./src/main.js",
    output: { 
        path: path.join(__dirname, "dist"), 
        filename: "bundle.js" 
    }
}
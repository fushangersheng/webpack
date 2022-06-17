const path = require("path")
const {join}
module.exports = {
    entry: "./src/main.js",
    output: { 
        path: path.join(__dirname, "dist"), 
        filename: "bundle.js" 
    }
}
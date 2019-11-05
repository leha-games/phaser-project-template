const merge = require("webpack-merge");
const path = require("path");
const prod = require("./prod");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(prod, {
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            use_cordova: true
        })
    ],
    output: {
        filename: "bundle.min.js",
        path: path.resolve(__dirname, '../cordova/www'),
    },
});

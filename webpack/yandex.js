const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");
const prod = require("./prod");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

module.exports = merge(prod, {
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            USE_YANDEX_GAMES_SDK: true
        }),
        new ServiceWorkerWebpackPlugin({
            entry: path.join(__dirname, '../src/sw.js'),
            publicPath: ''
        }),
        new webpack.DefinePlugin({
            USE_YANDEX_GAMES_SDK: true
        })
    ],
    output: {
        filename: "bundle.min.js",
        path: path.resolve(__dirname, '../yandex_games'),
    },
});

var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    cache: true,
    entry: './src/index',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('css-loader!autoprefixer-loader!less-loader')
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?name=img/[hash].[ext]&limit=128'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[hash].[ext]'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("app.css")
    ]
};

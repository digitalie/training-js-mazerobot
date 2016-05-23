var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    cache: true,
    entry: './src/index',
    output: {
        filename: 'build/index.js'
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
                loader: ExtractTextPlugin.extract("css-loader!less-loader")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("build/app.css")
    ]
};

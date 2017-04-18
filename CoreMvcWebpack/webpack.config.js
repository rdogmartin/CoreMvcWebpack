var path = require('path');
var webpack = require("webpack");

module.exports = {
    resolve: { extensions: ['.js', '.ts'] },

    entry: { "main-client": "./wwwroot/ts/app.ts" },
    devtool: 'source-map',
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './wwwroot/dist'),
        publicPath: '/dist/'
    },

    module: {
        rules: [{
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'ts-loader'
                }
            ]
        }]
    },
    plugins: [
    ]
}; 
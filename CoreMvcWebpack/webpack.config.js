var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        app: "./ClientApp/app/app.ts",
        vendor: './ClientApp/vendor.ts'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html']
    },
    output: {
        path: path.join(__dirname, 'wwwroot'),
        filename: 'js/[name].js',
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(png|jpg|gif|ico|woff|woff2|ttf|svg|eot)$/,
                use: 'file-loader?name=assets/[name].[ext]',
            },

            // Load css files which are required in vendor.ts
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    //fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/[name].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                // Bundle all script files from the node_modules directory into vendor.js file.
                // App script will end up in app.js.
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        //CommonChunksPlugin will now extract all the common modules from vendor and app bundles
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest' //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
        }),
        new CleanWebpackPlugin(
            [
                './wwwroot/js/',
                './wwwroot/css/',
                './wwwroot/assets/'
            ]
        ),
        // Inject the derived sources into test.html
        //new HtmlWebpackPlugin({
        //    template: './ClientApp/test.html',
        //    inject: 'body',
        //    filename: 'test.html'
        //}),
        //new HtmlWebpackPlugin({
        //    template: './Views/Shared/_Layout.cshtml',
        //    inject: 'body',
        //    filename: '../Views/Shared/_Layout.cshtml'
        //}),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ]
}; 
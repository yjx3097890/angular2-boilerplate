/**
 * Created by apple on 16/5/14.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    resolve: {
        extensions: ['.js', '.ts'],
        modules: [
            "node_modules"
        ]
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use:[
                    'awesome-typescript-loader',
                    'angular2-template-loader'
                ],
                exclude: [/node_modules\/(?!(ng2-.+|ngx-.+))/]
            },
            {
                test: /\.html$/,
                use:[
                    'html-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                use:[
                    {
                        loader: "file-loader",
                        options: {
                            name: 'assets/[name].[hash].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                use:  ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader'] })

            },
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                use: [
                    'raw-loader'
                    ]
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};

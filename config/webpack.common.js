/**
 * Created by apple on 16/5/14.
 */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./../src/others/utils');

module.exports = {
    entry: {
        'polyfills': helpers.root('src', 'others', 'polyfills.ts'),
        'vendor': './src/others/vendor.ts',
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
                include: [path.resolve(__dirname, "../src/public")],
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
                include: [path.resolve(__dirname, "../src/public")],
                use:  ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader'] })

            },
            {
                test: /\.(html|css)$/,
                exclude: [path.resolve(__dirname, "../src/public")],
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

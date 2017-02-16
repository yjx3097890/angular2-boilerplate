

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const absolutePath = require('./../src/others/utils').absolutePath;

module.exports = {
    entry: {
        'polyfills': absolutePath('src/others/polyfills.ts'),
        'vendor': absolutePath('src/others/vendor.ts'),
        'app': absolutePath('src/main.ts')
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
                include: [absolutePath('src/public')],
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
                include: [absolutePath('src/public')],
                use:  ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader'] })
            },
            {
                test: /\.(html|css)$/,
                exclude: [absolutePath('src/public')],
                use: [
                    'raw-loader'
                    ]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin([absolutePath('dist')], {
            root: absolutePath('/')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new CopyWebpackPlugin([
            {
                from: absolutePath('src/public/images'),
                to: 'images'
            },
            {
                from: absolutePath('src/public/font'),
                to: 'font'
            },
            {
                from: absolutePath('src/public/css'),
                to: 'css'
            }
        ], {
            copyUnmodified: false
        }),
        new HtmlWebpackPlugin({
            template: absolutePath('src/index.html')
        })
    ]
};

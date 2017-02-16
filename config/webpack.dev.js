const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const absolutePath = require('./../src/others/utils').absolutePath;

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: absolutePath('dist'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].map',
            exclude: ['vendor', 'polyfills'],
            columns: false
        }),
        new ExtractTextPlugin('[name].css')
    ]
});
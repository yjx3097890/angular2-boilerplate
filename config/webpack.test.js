
module.exports = {
    devtools: 'source-map',

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use:[
                    'awesome-typescript-loader'
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
                use: null
            },
            {
                test: /\.css$/,
                use:  null
            }
        ]
    }
};
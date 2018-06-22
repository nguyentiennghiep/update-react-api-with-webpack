const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        bundle: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist')
        , filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use: ['babel-loader'],
                test: /\.js$/,
                exclude: '/node_modules/'
            },
            {
                use: ['style-loader','css-loader']
                ,
                test: /\.css$/

            }
            ,
            {
                loader: 'file-loader',
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/
            }
          

        ]
    }
    

}
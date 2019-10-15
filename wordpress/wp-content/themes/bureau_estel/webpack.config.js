var path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: './src/app.ts',
    output: {
        path: path.resolve(__dirname, 'assets/js'),
        filename: 'app.js',
        chunkFilename: "app.chunk.js"
    },
    optimization: {
        minimizer: [new TerserPlugin()],
        splitChunks: {
            chunks: 'all'
        },
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env']
                    ]
                }
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [
            '.ts',
            '.js',
            '.tsx'
        ]
    },
    devtool: 'source-map'
};
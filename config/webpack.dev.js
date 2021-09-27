const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const base = require('./webpack.base');

module.exports = merge(base, {
    mode: 'development',
    devServer: {
        // contentBase: path.resolve(__dirname, '../dist/ui'),
        static: {
            directory: path.join(__dirname, '../dist'),
        },
        hot: true,
        port: 8088,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"',
        }),
    ],
});

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');


module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    },
    entry: {
        main: path.resolve(__dirname, './src/app.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'deploy')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack Output",
        }),
    ],
};




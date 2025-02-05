var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'bin')
    },
    module: {
        rules: [{
            test: /\.(s[ac]ss)$/,
            use: [{ loader: "style-loader" },{ loader: "css-loader" },{ loader: "sass-loader" }]
        }, {
            test: /\.css$/,
            use: [{ loader: "style-loader" },{ loader: "css-loader" }]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [{ loader: "file-loader" }]
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{ loader: "file-loader" }]
        }, {
            test: /\.html$/,
            use: [{ loader: "html-loader" }]
        }, {
            test: /\.svg$/,
            include: [/node_modules/],
            use: [{ loader: "file-loader" }]
        }, {
            test: /\.svg$/,
            include: [/backgrounds/],
            use: [{ loader: "url-loader" }]
        }, {
            test: /\.svg$/,
            exclude: [/backgrounds/],
            loader: 'svg-inline-loader?classPrefix'
        }
        ]
    },
    plugins: [
    new HtmlWebpackPlugin({
        template: "src/index.html"
    }),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.$': 'jquery',
        'window.jQuery': 'jquery'
    })
    ],
    devServer: { disableHostCheck: true }
};
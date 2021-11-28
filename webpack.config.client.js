const path = require('path');
const HtmlPlugin = require("html-webpack-plugin")
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/client/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/public'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src/client/index.html')
        })
    ],
    devServer: {
        hot: true,
        port: 3000
    }
}
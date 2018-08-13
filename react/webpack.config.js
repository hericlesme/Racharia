const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.[hash].js',
        },
        module: {
            rules: [
                { test: /\.css$/,
                      use: [
                          { loader: 'style-loader' },
                          { loader: 'css-loader' }
                      ]
                },
                {
                  test: /\.js$/,
                  exclude: /node_modules/,
                  use: ['babel-loader']
                }, {
                  test: /\.jsx?$/,
                  exclude: /node_modules/,
                  use: ['babel-loader']
                }
            ]
        },
        devServer: {
            contentBase: './dist'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html',
                favicon: './public/favicon.ico'
            })
        ],
        mode: 'development'
}

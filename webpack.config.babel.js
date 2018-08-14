import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const configuration = {
    entry: './client/src/index.js',
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
        port: process.env.CLIENT_PORT || 3000,
        contentBase: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/public/index.html',
            favicon: './client/public/favicon.ico'
        })
    ],
    mode: 'development'
}

export default configuration;

const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.[hash].js',
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};

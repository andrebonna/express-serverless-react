const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const webpackConfig = {
    entry: './src/View/index.js',
    devtool: isProduction ? 'source-map': 'inline-source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            loader:'babel-loader'
        }, {
            test: /\.css|\.scss$/,
            loader: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        minimize: true
                    }
                },{
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }]
            })
        }, {
            test: /\.(jpg|jpeg|gif|png|ttf|eot|svg|woff(2)?)$/,
            loader: 'url-loader?limit=1024&name=images/[name].[ext]'
        }]
    },
    output: {
        filename: 'bundle.js',
        path: `${__dirname}/build/client/public`
    },
    resolve: {
        extensions: ['.css', '.js', '.json']
    },
    plugins: [new CleanWebpackPlugin(['build/client/public'], {
        verbose: true
    }), new ExtractTextPlugin('bundle.css')],
    devServer: {
        contentBase: `${__dirname}/build/client/public`,
        inline: true,
        compress: true,
        port: 8080,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "*"
        }
    }
};

if (isProduction) {
    webpackConfig.plugins.push(new webpack.optimize.OccurrenceOrderPlugin(), new webpack.DefinePlugin({
        'process.env': {NODE_ENV: JSON.stringify('production')}
    }), new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}));
}

module.exports = webpackConfig;

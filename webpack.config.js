const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpackConfig = {
    entry: './src/View/index.js',
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            test: /\.js$/
        }, {
            loader: ExtractTextPlugin.extract(['css-loader!sass-loader']),
            test: /\.scss$/
        }, {
            test: /\.(jpg|jpeg|gif|png|ttf|eot|svg|woff(2)?)$/,
            loader: 'url-loader'
        }]
    },
    output: {
        filename: 'bundle.js',
        path: `${__dirname}/build/client/public`
    },
    resolve: {extensions: ['.js', '.json']},
    plugins: [new CleanWebpackPlugin(['build/client/public'], {
        verbose: true
    })]
};

if (process.env.NODE_ENV === 'production') {
    const stylesProd = new ExtractTextPlugin('bundle.css');
    webpackConfig.plugins.push(stylesProd, new webpack.optimize.OccurrenceOrderPlugin(), new webpack.DefinePlugin({
        'process.env': {NODE_ENV: JSON.stringify('production')}
    }), new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}));
} else {
    const styles = new ExtractTextPlugin('bundle.css');
    webpackConfig.plugins.push(styles);
}

module.exports = webpackConfig;

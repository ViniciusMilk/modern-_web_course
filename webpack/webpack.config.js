const ModoDev = process.env.NODE_ENV !== "production"
const webpack = require('webpack')
const Mini_css_extract_plugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptmizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: ModoDev ? 'development' : 'production',
    // mode: 'production',
    entry: './src/main.js',
    output:{
        filename: 'main.js',
        path: __dirname + '/public'
    },
    devServer:{
        contentBase: './public',
        port: 8080
    },
    optimization:{
        minimizer:[
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptmizeCSSAssetsPlugin({})
        ]
    },
    plugins:[
        new Mini_css_extract_plugin({
            filename: 'style.css'
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                Mini_css_extract_plugin.loader,
                // 'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },{
            test: /\.(png|svg|jpg|git)$/,
            use: ['file-loader']
        }]
    }
}
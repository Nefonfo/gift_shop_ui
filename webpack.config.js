const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const pages = [
    'index'
]

const generate_pages = () => {
    return pages.map(page => new HtmlWebpackPlugin({
        template: `src/pug/pages/${page}.pug`,
        filename: `${page}.html`
    }));
}

module.exports  = {
    mode: 'development',
    devtool: 'source-map',
    entry: ['babel-polyfill', path.resolve(__dirname, 'src/js/index.js')],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg|webmanifest|ico|xml)$/i,
                loader: 'file-loader',
                options: {
                  name: 'assets/[name].[ext]',
                },
            },
            {
                test: /\.js$/i,
                include: path.resolve(__dirname, 'src/js'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    /*'style-loader',*/
                    {
                      loader: 'css-loader',
                      options: {
                        importLoaders: 1
                      }
                    },
                    'postcss-loader'
                ]
            },
            { 
                test: /\.pug$/,
                use: [{
                    loader: 'pug-loader',
                    options: {
                        pretty: true
                    }
                }]
            },
        ]
    },
    optimization: {
        removeAvailableModules: false,
        minimizer: [
            (compiler) => {
                const TerserPlugin = require('terser-webpack-plugin');
                new TerserPlugin({
                  terserOptions: {
                        compress: {},
                    }
                }).apply(compiler);
            },
        ],
    },
    plugins: [
        ...[
            new BundleAnalyzerPlugin(),
            new MiniCssExtractPlugin(),
            new CssMinimizerPlugin(),
        ],
        ...generate_pages()
    ],
    optimization: {
        removeAvailableModules: false,
        minimizer: [
            (compiler) => {
                const TerserPlugin = require('terser-webpack-plugin');
                new TerserPlugin({
                  terserOptions: {
                        compress: {},
                    }
                }).apply(compiler);
            },
        ],
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 5501,
        hot: true
    },
}
const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const EslingPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const baseConfig = {
    entry: {
        index: path.resolve(__dirname, './src/index.ts'),
        sprint: path.resolve(__dirname, './src/view/pages/games/sprint/sprint.ts'),
        textbook: path.resolve(__dirname, './src/view/pages/textbook/textbookPage.ts'),
        audio: path.resolve(__dirname, './src/view/pages/games/audio-call/audio-call.ts'),
        statistics: path.resolve(__dirname, './src/view/pages/statistics/statistics.ts'),
    },
    mode: 'development',
    stats: { children: true },
    module: {
        rules: [
            {
                test: /.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.ts$/i,
                use: 'ts-loader',
            },
            {
                test: /\.html$/i,
                use: ['html-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.mp3$/,
                loader: 'file-loader'
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: `${__dirname}/build`,
        chunkFilename: '[id].[chunkhash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            filename: 'sprint.html',
            template: 'src/view/pages/games/sprint/sprint.html',
            chunks: ['sprint'],
        }),
        new HtmlWebpackPlugin({
            filename: 'textbook.html',
            template: 'src/view/pages/textbook/textbook.html',
            chunks: ['textbook'],
        }),
        new HtmlWebpackPlugin({
            filename: 'audio-call.html',
            template: 'src/view/pages/games/audio-call/audio-call.html',
            chunks: ['audio'],
        }),
        new HtmlWebpackPlugin({
            filename: 'statistics.html',
            template: 'src/view/pages/statistics/statistics.html',
            chunks: ['statistics'],
        }),
        new CleanWebpackPlugin(),
        new EslingPlugin({ extensions: 'ts' }),
        new CopyPlugin({
            patterns: [
                {
                    from: './src/assets',
                    to: './assets',
                },
            ],
        }),
    ],
};

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

    return merge(baseConfig, envConfig);
};

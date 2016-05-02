var path = require('path');
var NgAnnotatePlugin = require('ng-annotate-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');

module.exports = {
    entry: {
        example: './app/example/index.ts',
        common: './app/common/index.ts',
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    output: {
        path: path.join(ROOT_PATH, 'dist/app'),
        filename: '[name].js',
        sourceMapFilename: '[name].map',
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                include: APP_PATH,
                exclude: /(node_modules|bower_components|typings)/
            },
            //{ test: /\.css$/, loader: 'style!css' }
        ]
    },
    plugins: [
        new NgAnnotatePlugin({ add: true })
  ],
};
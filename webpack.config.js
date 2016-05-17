var path = require('path');
var NgAnnotatePlugin = require('ng-annotate-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');

module.exports = {
    
    // Developer tool to enhance debugging
    //
    // See: http://webpack.github.io/docs/configuration.html#devtool
    // See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
    devtool: 'cheap-module-eval-source-map',
    
    entry: {
        example: './app/example/index.ts',
        common: './app/common/index.ts',
        geolocation: './app/geolocation/index.ts',
        superhero: './app/superhero/index.ts'
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
            
            // Raw loader support for *.html
            // Returns file content as string
            //
            // See: https://github.com/webpack/raw-loader
            {
                test: /\.html$/, 
                loader: 'raw-loader'
            }
        ]
    },
    plugins: [
        new NgAnnotatePlugin({ add: true })
  ],
};
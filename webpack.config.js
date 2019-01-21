
const path = require('path');

module.exports = {

    entry : {
        home: path.resolve( './src/main'),
        page1: path.resolve( './src/page1'),
        page2: path.resolve('./src/page2'),


    },
    output: {
        path: path.join(__dirname ,'public/js'),
        filename: '[name].pluginfinder.js'
        chunkFilename: '[id].chunk.js'
    },
    module:{
        rules:[{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test:/\.css$/,
            use:[
                'style-loader',
                'css-loader'
            ]
        }]
    },
    devtool:'cheap-module-eval-source-map',

};
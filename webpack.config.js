
const path = require('path');

module.exports = {

    entry : ['babel-polyfill',"./src/app.js"],
    output: {
        path: path.join(__dirname ,'public/js'),
        filename: 'pluginfinder.js'
    },
    module:{
      rules:[{
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
      },{
          test:/\.s?css$/,
          use:[
              'style-loader',
              'css-loader',
              'sass-loader'

          ]
      }]
    },
    devtool:'cheap-module-eval-source-map'
};
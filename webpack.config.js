
const path = require('path');

module.exports = {

    entry : "./src/index.js",
    output: {
        path: path.join(__dirname ,'public/js'),
        filename: 'pluginfinder.js'
    },
    module:{
      rules:[{
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
      }]
    }
};
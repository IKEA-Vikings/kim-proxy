const path = require('path');

module.exports = {

  mode: 'development',
  entry: './client/index.html',
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.html$/, use: 'html-loader'},
      {test: /\.css$/, use:["style-loader", "css-loader"]}
    ]
  }
};
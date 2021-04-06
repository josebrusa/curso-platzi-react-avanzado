<<<<<<< HEAD
const HtmlWebpackPluing = require('html-webpack-plugin')
module.exports = {
  output: {
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPluing({
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  }
}
=======
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        filename: 'app.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}
>>>>>>> 66e898cd83c8274975b668305e24a9c3bb089c4b

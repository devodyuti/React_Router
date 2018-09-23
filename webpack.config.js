const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var APP_DIR = path.resolve(__dirname,'src');
var BUILD_DIR = path.resolve(__dirname,'src/');
module.exports = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'index_bundle.js'
  },
  watch: true,
  module: {
    rules: [
      {test:/\.css$/, use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]"'
      }), 
      exclude: /node_modules/},

      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/,query: {
          presets: ['react', 'env','es2015','stage-0']
        }},

      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/,query: {
          presets: ['react', 'env','stage-0']
        } },

      {
        test:/\.(jpg|png)$/,
        use:[
          'file-loader',
          {
            loader:'image-webpack-loader'
          }
        ]
      }
    ]
  },
  plugins:[
    new ExtractTextPlugin('styles.css')
  ]
}


//{test:/\.css$/, use: ['style-loader','css-loader'], exclude: /node_modules/},
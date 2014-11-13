module.exports = {
  entry: './src/app.js',

  output: {
    path: './build/',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.json', 'index.js', '.styl']
  },

  module: {
    loaders: [
      { test: /\.styl$/,          loader: 'style-loader!css-loader!stylus-loader' },
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'                 }
    ]
  }
};

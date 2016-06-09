module.exports = {
  entry: [
    './src/index.jsx',
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
        graph: './src/model/mindGraph'
    }
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
  },
};

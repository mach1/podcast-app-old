const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'production',
  context: path.resolve(__dirname, 'packages/client'),

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist')
  },

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.js', '.ts', '.tsx'],
    alias: { 'react-dom': '@hot-loader/react-dom' }
  },
  entry: './src/index.tsx',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/index.html',
      filename: path.resolve(__dirname, 'dist/index.html')
    })
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
}

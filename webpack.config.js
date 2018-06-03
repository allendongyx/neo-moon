var path = require('path')
var srcPath = path.resolve(__dirname, 'src')
module.exports = function (webpackConfig) {
  webpackConfig.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      },
      'postcss-loader',
      'autoprefixer-loader',
      'sass-loader',
      {
        loader: 'sass-resources-loader',
        options: {
          resources: [srcPath + '/assets/sass/mixin.scss', srcPath + '/assets/sass/basic.scss', srcPath + '/assets/sass/color.scss', srcPath + '/assets/sass/units.scss']
        }
      }
    ]
  }
  )
  return webpackConfig
}

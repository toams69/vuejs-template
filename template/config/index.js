'use strict'
const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api/*': {
        target: 'http://localhost:' + (process.env.PORT || 8090),
        changeOrigin: true
      },
      '/socket.io/*': {
        target: 'http://localhost:' + (process.env.PORT || 8090),
        changeOrigin: true
      }
    },
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    useEslint: true,
    showEslintErrorsInOverlay: false,
    devtool: 'cheap-module-eval-source-map',
    cacheBusting: true,
    cssSourceMap: true
  },
  build: {
    index: path.resolve(__dirname, '../src/service/webapp/index.html'),
    assetsRoot: path.resolve(__dirname, '../src/service/webapp'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  env: {
    host: process.env.HOST || 'localhost',
    port_webapp: 5555
  }
}

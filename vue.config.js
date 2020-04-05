/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require('webpack-merge')
const tsImportPluginFactory = require('ts-import-plugin')
const autoprefixer = require('autoprefixer')
const pxtoviewport = require('postcss-px-to-viewport')

const MOCK_BASE_URL =
  'http://localhost:7300/mock/5e893e08f6d6962126aae9e4/survey'

module.exports = {
  outputDir: 'dist',
  publicPath: '/mobile/',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtoviewport({
            viewportWidth: 375,
          }),
        ],
      },
    },
  },
  chainWebpack: config => {
    config.module
      .rule('ts')
      .use('ts-loader')
      .tap(options => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: 'vant',
                libraryDirectory: 'es',
                style: true,
              }),
            ],
          }),
          compilerOptions: {
            module: 'es2015',
          },
        })
        return options
      })
  },
  devServer: {
    proxy: {
      '/api': {
        target: MOCK_BASE_URL,
        changeOrigin: true,
      },
    },
  },
}

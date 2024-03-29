const { HtmlRspackPlugin } = require('@rspack/core')
const { VueLoaderPlugin } = require('vue-loader')
const VueMacros = require('unplugin-vue-macros/rspack')

/** @type {import('@rspack/core').Configuration} */
module.exports = {
  context: __dirname,
  mode: 'development',
  entry: {
    main: './src/main.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: 'builtin:swc-loader',
        options: {
          sourceMap: true,
          jsc: {
            parser: {
              syntax: 'typescript',
            },
          },
        },
        type: 'javascript/auto',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: { experimentalInlineMatchResource: true },
      },
      {
        test: /\.png$/,
        type: 'asset/source',
      },
    ],
  },
  plugins: [
    VueMacros({
      defineModels: false,
    }),
    new VueLoaderPlugin(),
    new HtmlRspackPlugin({
      template: './index.html',
    }),
  ],
}

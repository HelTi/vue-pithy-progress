module.exports = {
  pages: {
    index: './src/pages/index/main.js',
    demo: './src/pages/demo/main.js'
  },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  }
}

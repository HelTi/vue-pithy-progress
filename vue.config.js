const isLib = process.env.VUE_APP_TITLE == 'lib'

module.exports = {
  pages: {
    index: './src/pages/index/main.js',
    demo: './src/pages/demo/main.js'
  },
  outputDir: isLib ? './lib' : './dist',
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  }
}

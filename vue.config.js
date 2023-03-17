module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: 'http://localhost:8011'
  },
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
          args[0].title = 'Human NUMTs database'
          return args
        })
  }
}

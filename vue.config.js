module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/scss/varible.scss";'
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/web-covid19/'
}

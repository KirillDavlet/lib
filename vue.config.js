module.exports = {
  productionSourceMap: false,
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/styles/global.sass"`
      }
    }
  }
};

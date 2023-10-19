const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 7000
  },
  chainWebpack: config =>{
    config.plugin('html')
        .tap(args => {
          args[0].title = "苏州千火科技有限公司";
          return args;
        })
  }
})
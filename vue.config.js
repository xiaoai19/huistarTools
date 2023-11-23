const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  // devServer:{
  //   proxy:{
  //     '/api':{
  //         target:'https://www.希雅.top:222',
  //         pathRewrite:{'^/api':''},
  //         ws:true,
  //         secure:false,
  //     }
  //   }
  // }
})

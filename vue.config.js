const path = require('path')
const apiMocker = require('webpack-api-mocker')

module.exports = {
  lintOnSave: 'error',
  devServer: {
    port: 4200,
    before(app){
      apiMocker(app, path.resolve('./mock/index.js'), {
        changeHost: true,
      })
    }
  }
}

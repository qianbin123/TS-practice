const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  plugins: [
    new CleanWebpackPlugin() // 作用每次成功构建之后帮助清空原先目录
  ]
}
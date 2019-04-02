module.exports = {
  devServer: {
    proxy: {
      api: {
        target: 'http://news-at.zhihu.com',
        // ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api/4': '/api/4' // rewrite path
        }
      }
    }
  }
}

module.exports = {
    devServer:{
        port:8899,
        host:"0.0.0.0",
        https:false,
        open:true,
        proxy: {
            '/': {
              target: 'http://127.0.0.1:8000',
              changeOrigin: true,
              pathRewrite: {
                '^/api': '/' 
                
              }
            }
          }
    },

    lintOnSave:false,
    productionSourceMap:false,
}
const path = require('path');
const Mock = require('./mock/mock.js');

module.exports = {
    // 配置less
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true,
            }
        }
    },
    // devServer: {
    //     proxy: {
    //         '/api': {
    //             target: 'http://127.0.0.1:80/api/auth/', //对应自己的接口
    //             changeOrigin: true,
    //             //ws: true,
    //             pathRewrite: {
    //               '^/api': ''
    //             }
    //         }
    //     }
    // }
    // devServer: {
    //     open: true,
    //     port:4000,
    //     before(app){
    //       app.get('/goods/list',(req,res,next)=>{
    //         res.json(mockdata);
    //       })
    //     }
    // }
    // devServer: {
    //     proxy: {
    //       '/api': {
    //         target: 'http://localhost:8080',
    //         changeOrigin: true,
    //         pathRewrite: {
    //           '^/api': '/mock'
    //         }
    //       }
    //     }
    //   }
    devServer: {
        contentBase: path.join(__dirname, 'mock'),
        compress: true,
        port: 8080,
        overlay: {
          warnings: false,
          errors: true
        },
        before(app){
          Mock(app)
        }
    }
}
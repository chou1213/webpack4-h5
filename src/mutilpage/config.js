/**
 * Create on 2019/1/10
 */

const path = require('path')
const HOST = ''; //代理域名

module.exports = {
    title: 'mutilpage', // document.title
    output: {
        path: path.resolve(process.cwd(), 'dist/mutilpage'), //输出路径, 默认dist目录下同名文件
        publicPath: './' //打包静态资源的路径，默认./
    },
    build: {
        // template: 'index.php', //打包引用的模板文件
        // filename: 'index.php'  //打包输出的文件名
    },
    devServer: {
        htts: false, //https服务
        proxy: {
            '/api': {
                target: HOST,
                changeOrigin: true
            }
        }
    },
    open: false, //编译完成是否打开页面
    useEslint: true, //是否需要eslint校验
    px2rem: true //是否使用px2rem插件
}
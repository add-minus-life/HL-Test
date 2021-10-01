/**
 *  基础配置文件+开发模式配置文件
 */
const Merge = require("webpack-merge"); //返回的事Merge对象，可以通过控制台打印查看
const common = require("./webpack.common");

module.exports = Merge.merge(common,{
    mode:'development',
    devtool:"inline-source-map",
    devServer:{
        contentBase:'./dist'
    },
    optimization:{
        usedExports:true
    },
})

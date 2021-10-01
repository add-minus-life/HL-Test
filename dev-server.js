/**
 * 功能描述：
 *   开发模式：
 *    
 *   思路：
 *     (1)区分开发与基础模式，需单独配置基础模式配置、开发模式两配置配置文件；
 *        webpack-common.js
 *        dev-server.js
 *     (2) 获取或创建配置文件
 *   
 *      
 */
//1 
const webpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");
//2 获取或创建配置文件
const config = require("./webpack.common.js");
const options = {
    contentBase:'dist',
    // hot:true,
    host:'localhost'
}
//3 合并配置文件（增加开发服务器入口点）
webpackDevServer.addDevServerEntrypoints(config,options);
//4 webpack编译基本配置
const compiler = webpack(config);
//5 创建webpackdevserver实例
const server = new webpackDevServer(compiler,options);
server.listen(4000,'localhost',()=>{
    console.log("dev server listen on port 4000");
})
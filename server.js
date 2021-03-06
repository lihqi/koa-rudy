/**
 * built by slashhuang
 * 主程序入口
 * 16.12.23
 */

if (process.env.NODE_ENV == 'dev') {
    require("babel-register");
}

const debug = require('debug')('rudy:server');

// 获取配置文件
const config = require('./config/index.js')(process.env['NODE_ENV']);

// 挂载全局配置
global._appConfig = config;

const app = require('./bin/app');
const server = require('http').createServer(app.callback());

server.listen(config.port);

console.log('启动端口' + config.port);
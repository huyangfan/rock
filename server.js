import app from './app.js';
import config from './config/index.js';
import mongoose from 'mongoose';

mongoose.connect(config.mongodb.url, config.mongodb.options).then(
    () => {
        console.info('连接MongoDB成功');


        app.listen(config.port); // app.listen() 相当于 http.createServer(app.callback()).listen();
        
        console.info(`app listening on ${config.port} in ${config.env}`);

        process.on('exit', () => {
            console.info('进程退出');
        });

        process.on('uncaughtException', (err) => {
            console.info('捕获到异常', err);
        });
    },
    (err) => {
        console.error('连接MongoDB失败：', err);
        return;
    }
);
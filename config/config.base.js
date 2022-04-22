export default {
    appkeys: ['shhhhhh!!!!'],
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'dev',
    host: '127.0.0.1',
    logDir: 'logs',
    uploadDir: 'uploads',
    publicDir: 'public',
    mongodb: {
        // url: 'mongodb://localhost:27017/rock',
        options: {
            keepAlive: true,
        }
    },
    jwt: {
        secret: 'mySecret',
        iss: 'www.myCompany.com',
        exp: 24 * 3600, // token 有效期1天
        refreshIn: 12 * 3600 // 12小时之后的前端接口调用将重新颁发token 
    },
    corsOptions: {
        "origin": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 204
    }
    // mysql:{
    //     url: 'mysql://localhost:3306/rock'
    // },
}


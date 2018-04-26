import express from 'express';
import session from 'express-session';
import compression from 'compression';
import morgan from 'morgan';
import path from 'path';
import config from './config';
import router from './app/router';
import logger from './app/logger';

const MongoStore = require('connect-mongo')(session);

const app = express();

app.set('views', path.join(__dirname, './app/view'));

app.use(compression());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));
app.use(session({
    secret: 'bitofAPP',
    proxy: true,
    resave: false,
    saveUninitialized: false,
    httpOnly: true,
    store: new MongoStore({
        url: config.mongodb.url,
        ttl: 24 * 3600 // 1day auto-remove expired sessions
    })
}));

app.use('/', router);


export default app;
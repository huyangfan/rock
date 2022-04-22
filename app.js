import express from 'express';
import compression from 'compression';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import config from './config/index.js';
import router from './app/router.js';

const app = express();

app.enable("trust proxy");
app.use(cors(config.corsOptions));
app.use(helmet());
app.disable('x-powered-by');
app.use(compression());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false }));
app.use(morgan('combined'));
app.use('/', router);

export default app;

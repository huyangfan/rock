import base from './config.base.js';
import dev from './config.dev.js';
import local from './config.local.js';
import prod from './config.prod.js';
import fs from 'fs-extra';

// extend base config with current env config
var conf = base;
var extend = {};
switch (base.env) {
    case 'dev': extend = dev; console.info('config dev loaded');
        break;
    case 'local': extend = local; console.info('config local loaded');
        break;
    case 'prod': extend = prod; console.info('config prod loaded');
        break;
    default: console.warn(`当前 env:${base.env} 对应的 config 未找到`);
}
const config = Object.assign({}, conf, extend);

// ensure directories
fs.ensureDirSync(config.logDir);
fs.ensureDirSync(config.uploadDir);
fs.ensureDirSync(config.publicDir);

export default config;
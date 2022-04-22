import express from 'express';
import usercontroller from './controller/user.js';
import helper from './helper.js';
import err from './error_codes.js';
import auth from './middleware/auth.js';
import config from '../config/index.js';
import multer from 'multer';

const router = express.Router();

const upload = multer({dest:config.uploadDir});

// basic test
router.get('/hello', (req, res, next) => {
    res.send({ hello: 'world' });
    next();
});

// user login with username and password
router.post('/login', usercontroller.login);

// user register
router.post('/register', usercontroller.register);

// user profile
router.get('/profile', auth.requiresToken, usercontroller.profile);

// file upload demo
router.post('/upload', upload.single('avatar'), (req, res, next) => {
    console.log(req.file);
    res.json(req.file)
})

export default router;
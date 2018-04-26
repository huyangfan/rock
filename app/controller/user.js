import User from '../model/user';
import helper from '../helper';
import config from '../../config'

export default {
    register: async (req, res, next) => {
        console.log('req.body', req.body);

        const user = new User(req.body);
        await user.save();
        res.send('user created!');
    },
    login: async (req, res, next) => {
        console.log('req.body', req.body);
        const person = await User.findOne({ username: req.body.username });
        person.comparePassword(req.body.password, (err, isMatch) => {
            if (err) throw err;
        });
        const token = helper.generateToken({
            id: person.id,
            truename: person.truename
        }, config.jwt);
        console.log('token:', token);
        res.send({
            userid: person.id,
            token: token
        });
        next();
    },
    profile: async (req, res, next) => {
        res.send(req.user);
    }
}
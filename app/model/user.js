import mongoose from 'mongoose';

const SALT_WORK_FACTOR = 10;

const UserSchema = new mongoose.Schema({
    truename: { type: String },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createtime: { type: Date, default: Date.now(), required: true }
});




const User = mongoose.model('User', UserSchema);

export default User;
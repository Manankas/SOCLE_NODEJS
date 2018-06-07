import * as mongoose from 'mongoose';
import { User } from './user.model';
import * as bcrypt from 'bcrypt';

const schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    socketId: {
        type: String
    }
});

schema.pre<User>('save', async function(next) {
    if (this.isModified('password') || this.isNew) {
        this.password = await bcrypt.hash(this.password, 10);
        next();
    } else {
        next();
    }
});

schema.methods.validPassword = function(this: User, password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
};

export const userSchema = mongoose.model<User>('User', schema);

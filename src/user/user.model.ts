import * as mongoose from 'mongoose';

export interface User extends mongoose.Document {
    _id: string;
    email: string;
    password: string;
    socketId: string;
    validPassword: (p: string) => Promise<boolean>;
}

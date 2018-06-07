import { ServiceRead } from '../common/service/service-read.interface';
import { ServiceWrite } from '../common/service/service-write.interface';
import { User } from './user.model';
import { userRepository } from './user.repository';

const notImplemented = 'Method not implemented.';

class UserService implements ServiceRead<User>, ServiceWrite<User> {
    async getList(): Promise<Partial<User>[]> {
        const users = await userRepository.find({});

        return users.map(({ _id, email }) => ({ _id, email }));
    }

    async getById(id: string): Promise<User | null> {
        return await userRepository.findById(id);
    }

    async count(): Promise<number> {
        const contacts = await userRepository.find({});

        return contacts.length;
    }

    async create(item: User): Promise<User> {
        throw new Error(notImplemented);
    }

    async delete(id: string): Promise<boolean> {
        throw new Error(notImplemented);
    }

    async update(item: User): Promise<User> {
        throw new Error(notImplemented);
    }
}

export const userService = new UserService();

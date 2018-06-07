import { Router } from 'express';
import { userController } from './user.controller';

class UserRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.route('/').get(userController.getList);
    }
}

const userRouter = new UserRouter();

export const userRoutes = userRouter.router;

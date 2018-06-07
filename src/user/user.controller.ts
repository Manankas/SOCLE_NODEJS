import { Request, Response } from 'express';

import { ControllerRead } from '../common/controller/controller-read.interface';
import { ControllerWrite } from '../common/controller/controller-write.interface';
import { User } from './user.model';
import { userService } from './user.service';

const notImplemented = 'Method not implemented.';

class UserController implements ControllerRead, ControllerWrite {
    getList(req: Request, res: Response): void {
        userService
            .getList()
            .then((response: Partial<User>[]) => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    getById(req: Request, res: Response): void {
        userService
            .getById(req.params.id)
            .then((response: User | null) => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    count(req: Request, res: Response): void {
        userService
            .count()
            .then(response => res.status(200).json(response))
            .catch(err => res.status(500).json(err));
    }

    create(req: Request, res: Response): void {
        /* Create user */
        throw new Error(notImplemented);
    }

    delete(req: Request, res: Response): void {
        /* Delete user */
        throw new Error(notImplemented);
    }

    update(req: Request, res: Response): void {
        /* Update user */
        throw new Error(notImplemented);
    }
}

export const userController = new UserController();

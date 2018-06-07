import { Router } from 'express';
import * as passport from 'passport';

import { contactRoutes } from '../contact/contact.routes';
import { userRoutes } from '../user/user.routes';
import { authenticationRoutes } from '../authentication/authentication.routes';

class AppRouter {
    router: Router;
    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.get('/api-status', (req, res) => res.json({ status: 'API is OK' }));
        this.router.use('/authentication', authenticationRoutes);
        this.router.use(
            '/contact',
            passport.authenticate('jwt', { session: false }),
            contactRoutes
        );
        this.router.use('/user', passport.authenticate('jwt', { session: false }), userRoutes);
    }
}

const appRouter = new AppRouter();
export const appRoutes = appRouter.router;

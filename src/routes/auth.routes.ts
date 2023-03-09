import { Router } from "express";
import authController from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post('/signup', authController.signUp);

authRouter.post('/signin', authController.adminSignIn);

authRouter.post('/login', authController.signIn);

authRouter.post('/profile', authController.profile)

authRouter.get('/logout', authController.logout);

authRouter.put('/update/:id', authController.updateUser);

authRouter.delete('/delete', authController.deleteUser);

authRouter.post('/me', authController.me);

export default authRouter;


import { Router } from "express";
import authController from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post('/signup', authController.signUp);

authRouter.post('/signin', authController.signIn);

authRouter.get('/profile', authController.profile);

authRouter.get('/logout', authController.logout);

authRouter.put('/update', authController.updateUser);

authRouter.delete('/delete', authController.deleteUser);

export default authRouter;


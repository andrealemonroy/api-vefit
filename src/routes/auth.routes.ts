import { Router } from "express";
import authController from "../controllers/auth.controller";
import {ensureAuthenticated} from '../middleware/ensureAuthenticate'


const authRouter = Router();

authRouter.get("/login", authController.login);

authRouter.get("/callback", authController.callback);

authRouter.post("/signup", authController.signUp);

authRouter.post("/signin", authController.adminSignIn);

authRouter.get("/profile", authController.profile);

authRouter.post('/logout', authController.logout);

authRouter.put("/update/:id", authController.updateUser);

authRouter.delete("/delete", authController.deleteUser);

authRouter.post("/me", authController.me);

authRouter.get("/", (_req: any, res: any) => {
    res.json({ msj: "hola sali" });
 });
authRouter.get("/prueba", ensureAuthenticated, (_req: any, res: any) => {
    res.json({ msj: "hola paso prueba" });
 });

export default authRouter;

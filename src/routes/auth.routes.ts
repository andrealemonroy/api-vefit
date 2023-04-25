import { Router } from "express";
import authController from "../controllers/auth.controller";
import { ensureAuthenticated } from "../middleware/ensureAuthenticate";

const authRouter = Router();//signUPUser

/**
 * @swagger
 * /users/{id}/profile:
 *    post:
 *      tags: 
 *        - profile
 *      summary: "Crea y completa el perfil de usuario"
 *      description: Este endpoint es para 
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID del User
 *          required: true
 *          schema:
 *            type: string
 *            format: int64
 *      requestBody:
 *          content: 
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/profile"
 *      responses:
 *        '200':
 *          description: Retorna el objeto del user con el perfil intedrado.
 *        '422':
 *          description: Error de validacion.
 */
authRouter.get("/login", authController.login);

authRouter.get("/callback", authController.callback);


authRouter.get("/profileTem", ensureAuthenticated, authController.profile);
authRouter.get("/logout", authController.logout);


authRouter.post("/me", authController.me);
authRouter.get("/", (_req: any, res: any) => {
   res.json({ msj: "" });
});

export default authRouter;

import { Router } from "express";
import { getUser, getUsers,  deleteUser, signUp, signIn} from "../controllers/users.controller";
const userRouter = Router();

userRouter.get('/users', getUsers);
userRouter.get('/users/:id', getUser);
userRouter.delete('/users/:id',deleteUser);
userRouter.post('/signIn', signIn);
userRouter.post('/signUp', signUp);

export default userRouter;

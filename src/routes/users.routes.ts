import { Router } from "express";
import { getUser, getUsers, deleteUser} from "../controllers/users.controller";
const userRouter = Router();

userRouter.get('/users', getUsers);
userRouter.get('/users/:id', getUser);
userRouter.delete('/users/:id',deleteUser);

export default userRouter;

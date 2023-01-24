import { Router } from "express";
import { getUser, getUsers} from "../controllers/users.controller";
const userRouter = Router();

userRouter.get('/users', getUsers);
userRouter.get('/users/:id', getUser);

export default userRouter;

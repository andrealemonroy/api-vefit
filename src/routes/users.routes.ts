import { Router } from "express";
import { getUser, getUsers, createUser, updateUser, deleteUser} from "../controllers/users.controller";
const userRouter = Router();

userRouter.get('/users', getUsers);
userRouter.get('/users/:id', getUser);
userRouter.post("/users", createUser);
userRouter.put("/users/:id", updateUser);
userRouter.delete("/users/:id", deleteUser);

export default userRouter;

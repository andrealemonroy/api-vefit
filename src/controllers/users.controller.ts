import User from "../models/User.model";

export const getUsers = async (req: any, res: any) => {
    const users = await User.find();
    res.json(users);
}

export const getUser = async (req: any, res: any) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}


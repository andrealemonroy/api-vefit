import User from "../models/User.model";

export const getUsers = async (req: any, res: any) => {
    const users = await User.find();
    res.json(users);
}

export const getUser = async (req: any, res: any) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}

export const createUser = async (req: any, res: any): Promise<Response> => {
    try {
      const user = new User(req.body);
      await user.save();
      return res.json(user);
    } catch (error) {
      return res.status(500).json({
        message: 'Error creating User',
        error,
      });
    }
  };

export const deleteUser = async (req: any, res: any): Promise<Response> => {
    const user = await User.findByIdAndDelete(req.params.id);
    console.log(user);
    return res.json(user);
  };
  
export const updateUser = async (req: any, res: any): Promise<Response> => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log(user);
    return res.json(user);
  };
  

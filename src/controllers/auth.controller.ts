import User from "../models/User";

const jwt = require('jsonwebtoken');

const createToken = (user: any) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: 86400, // 24 hours
  });
};

const verifyToken = (req: any, res: any, next: any) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    return res.status(403).json({ auth: false, message: 'No token provided.' });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.userId = decoded.id;
  next();
};

const signIn = async (req: any, res: any) => {
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
    });
    if (!user) {
        return res.status(404).send('The email doesn\'t exists');
    }
    const token = createToken(user);
    res.status(200).json({ auth: true, token });
};

const signUp = async (req: any, res: any) => {
    const { email, password } = req.body;
    const newUser = new User({ email, password });
    await newUser.save();
    const token = createToken(newUser);
    res.status(200).json({ auth: true, token });
};

const profile = async (req: any, res: any) => {
    const user
        = await User.findById(req.userId, { password: 0 });
    if (!user) {
        return res.status(404).send('No user found.');
    }
    res.status(200).json(user);
};

const logout = (req: any, res: any) => {
    res.status(200).send({ auth: false, token: null });
};

const updateUser = async (req: any, res: any) => {
    const user
        = await User.findByIdAndUpdate
            (req.userId, req.body, {
                new: true,
                runValidators: true,
            });
    if (!user) {
        return res.status(404).send('No user found.');
    }
    const token = createToken(user);
    res.status(200).json({ auth: true, token });
};

const deleteUser = async (req: any, res: any) => {
    const user
        = await User.findByIdAndDelete(req.userId);
    if (!user) {
        return res.status(404).send('No user found.');
    }
    res.status(200).json({ auth: false, token: null });
};

export default {
    signIn,
    signUp,
    profile,
    logout,
    updateUser,
    deleteUser,
    verifyToken,
};

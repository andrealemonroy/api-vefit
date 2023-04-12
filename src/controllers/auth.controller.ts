import { Collection } from 'mongoose';
import SignUpUser from '../models/SignUpUser.model';
import User from '../models/User.model';
import { handleHtppError } from '../utils/hadleHtppError';
import {encrypt, compare} from "../utils/handlePassword"


const jwt = require('jsonwebtoken');


const createToken = (user: any) => {
  console.log("createToken",process.env.JWT_SECRET)
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: 1000, // 24 hours
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

const findAdminByEmail = async (email: string) => {
  return await SignUpUser.findOne({ email });
};

const findUserByEmail = async (email: string) => {
  return await User.findOne({ email:email });
};

const adminSignIn = async (req: any, res: any) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).send('El email y la contraseña son requeridos');
  }
  try {
    console.log(req.body.email);
    const findUser = await findAdminByEmail(req.body.email);
    if (!findUser) {
      return res.status(404).send('No user found.');
    }
    if (findUser?.password !== req.body.password) {
      return res
        .status(401)
        .json({ auth: false, token: null, message: 'Contraseña incorrecta' });
    }
    const token = createToken(findUser);
    res.status(200).json({
      auth: true,
      token,
      message: 'Bienvenido a tu cuenta',
      user: findUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send('Error al iniciar sesión');
  }
};

const signIn = async (req: any, res: any) => {
  console.log(req.body,"mensaje")
  if (!req.body.email || !req.body.password) {
    return res.status(400).send('El email y la contraseña son requeridos');
  }
  try {
    const findUser = await findUserByEmail(req.body.email);
    console.log(findUser)
    const hashPassword = await User.findOne({ email: String }).select("password");
    console.log(findUser, 'findUser')
    const checkPassword = await compare(req.body.password, hashPassword.password);
    findUser.set("password", undefined, { strict: false }); // oculto la password
    console.log(findUser.password, "escondela")
    if (!checkPassword) {
      handleHtppError(res, "Invalid Password", 401);
      return;
    }
    if (!findUser) {
      return res.status(404).send('No user found.');
    }
    console.log(findUser?.password, req.body.password)
    if (findUser?.password != req.body.password) {
      return res
        .status(401)
        .json({ auth: false, token: null, message: 'Contraseña incorrecta' });
    }

    const token = createToken(findUser);

    res.status(200).json({
      auth: true,
      token,
      message: 'Bienvenido a tu cuenta',
      user: findUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send('Error al iniciar sesión');
  }
};

const signUp = async (req: any, res: any) => {
  const { name, email, password, birthday, weight, height, diseases, termsAndConditions, privacyPolicy } = req.body;
  const passwordHash = await encrypt(req.body.password); //encrypta la password
  if (!name) {
    return res.status(400).send('El nombre es requerido');
  }
  if (!email) {
    return res.status(400).send('El email es requerido');
  }
  if (!password) {
    return res.status(400).send('La contraseña es requerida');
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('Ya existe un usuario con ese email');
    }
    // console.log(req.body)
    const user = new User({
      name,
      email,
      password:passwordHash,
      birthday,
      weight,
      height,
      diseases,
      termsAndConditions,
      privacyPolicy
    });
    const token = createToken(user);
    user.token = token;
    await user.save();
    console.log(token)
    user.set("password", undefined, { strict: false }); //No muestre la password al crear
    res
      .status(200)
      .json({ auth: true, token, message: 'Usuario creado con éxito', user });
  } catch (error) {
    console.log(error);
    res.status(500).send('Error al crear el usuario');
  }
};

const profile = async (req: any, res: any) => {
  console.log(req);
  const user = await SignUpUser.findById(req.userId, { password: 0 });

  if (!user) {
    return res.status(404).send('No user found.');
  }
  res.status(200).json(user);
};

const logout = (req: any, res: any) => {
  res.status(200).send({ auth: false, token: null });
};

const updateUser = async (req: any, res: any) => {
  console.log('userID', req.params.id);
  const user = await User.findById(req.params.id);
  
  console.log(user, 'user');
  if (!user) {
    return res.status(404).send('No user found.');
  }
  const token = createToken(user);
  res.status(200).json({ auth: true, token });
};

const deleteUser = async (req: any, res: any) => {
  const user = await User.findByIdAndDelete(req.userId);
  if (!user) {
    return res.status(404).send('No user found.');
  }
  res.status(200).json({ auth: false, token: null });
};

const me = async (req: {token: string}, res: any) => {
  const token = req.token;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded.id);
  res.json(user);
};

export default {
  adminSignIn,
  signIn,
  signUp,
  profile,
  logout,
  updateUser,
  deleteUser,
  verifyToken,
  me
};

import { hash, compare as bcryptCompare } from 'bcrypt';

export const encrypt = async (password: any) => {
  return await hash(password, 10);
};

export const compare = async (password: any, hashPassword: any) => {
  return await bcryptCompare(password, hashPassword);
};


import { hash, compare as bcryptCompare } from 'bcrypt';
export const encrypt = async (password) => {
    return await hash(password, 10);
};
export const compare = async (password, hashPassword) => {
    return await bcryptCompare(password, hashPassword);
};
//# sourceMappingURL=handlePassword.js.map
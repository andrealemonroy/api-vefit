"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Profile_model_1 = __importDefault(require("../models/Profile.model"));
const UserCapa1_model_1 = __importDefault(require("../models/UserCapa1.model"));
const createProfile = async (req, res) => {
    const { idUser } = req.params;
    const { birthday, weight, height, diseases } = req.body;
    try {
        const newProfile = await Profile_model_1.default.create({
            birthday,
            weight,
            height,
            complete: true,
            diseases,
        });
        if (!weight || !height) {
            return res
                .status(400)
                .send({ message: 'Tu peso y altura son necesarios' });
        }
        const user = await UserCapa1_model_1.default.findByIdAndUpdate(idUser, { profile: newProfile }, { new: true }).populate({ path: 'profile' });
        user
            ? res.status(200).json(user)
            : res.status(404).send('Usuario no encontrado');
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).send(error.message);
    }
};
const updateProfile = async (req, res) => {
    const { idUser } = req.params;
    try {
        const user = await UserCapa1_model_1.default.findById(idUser).populate({
            path: 'profile',
        });
        if (!user) {
            return res.status(404).send('Usuario no encontrado');
        }
        const newProfile = await Profile_model_1.default.findByIdAndUpdate(user.profile._id, req.body, { new: true });
        user.profile = newProfile;
        await user.save();
        return res.status(200).json(user);
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).send(error.message);
    }
};
const delteDesease = async (req, res) => {
    var _a;
    const { idUser } = req.params;
    const desease = req.body;
    try {
        if (!desease) {
            return res
                .status(400)
                .send('Que enfermedad deseas eliminar de tu lista.');
        }
        const user = await UserCapa1_model_1.default.findById(idUser).populate({
            path: 'profile',
        });
        if (!user) {
            return res.status(404).send('Usuario no encontrado');
        }
        user.profile.diseases = (_a = user.profile.diseases) === null || _a === void 0 ? void 0 : _a.filter((d) => d.name !== desease.name);
        await user.profile.save();
        return res.status(200).send(user);
    }
    catch (error) {
        console.log(error.message);
    }
};
exports.default = {
    createProfile,
    updateProfile,
    delteDesease,
};

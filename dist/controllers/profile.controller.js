"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Profile_model_1 = __importDefault(require("../models/Profile.model"));
const UserCapa1_model_1 = __importDefault(require("../models/UserCapa1.model"));
const createProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idUser } = req.params;
    const { birthday, weight, height, diseases } = req.body;
    try {
        const newProfile = yield Profile_model_1.default.create({ birthday, weight, height, complete: true, diseases });
        // const disease = await diseaseModel.findOne({name: diseases})
        // newProfile.diseases.push(disease)
        // await newProfile.save()
        const user = yield UserCapa1_model_1.default.findByIdAndUpdate(idUser, { profile: newProfile }, { new: true }).populate({ path: 'profile' });
        return res.status(201).json(user.profile);
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).send(error.message);
    }
});
exports.default = {
    createProfile,
};
//# sourceMappingURL=profile.controller.js.map
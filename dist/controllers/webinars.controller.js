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
exports.deleteWebinar = exports.putWebinar = exports.postWebinar = exports.getWebinar = exports.getWebinars = void 0;
const Webinars_model_1 = __importDefault(require("../models/Webinars.model"));
const getWebinars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const webinars = yield Webinars_model_1.default.find();
    res.status(200).json(webinars);
});
exports.getWebinars = getWebinars;
const getWebinar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const webinars = yield Webinars_model_1.default.findById(id);
    res.status(200).json(webinars);
});
exports.getWebinar = getWebinar;
const postWebinar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { titulo, fechaYHora, link, responsables } = req.body;
    try {
        const newWebinar = yield Webinars_model_1.default.create({
            titulo,
            fechaYHora,
            link,
            responsables
        });
        res.status(201).json(newWebinar).send("se genero la reunion correctamente");
    }
    catch (error) {
        res.status(400).send("no se pudo coordinar la reunion");
    }
});
exports.postWebinar = postWebinar;
const putWebinar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { titulo, fechaYHora, link, responsables } = req.body;
    try {
        const idWebinar = yield Webinars_model_1.default.findByIdAndUpdate(id, {
            titulo,
            fechaYHora,
            link,
            responsables
        });
        res.status(201).json(idWebinar);
    }
    catch (error) {
        res.status(400).send("no se pudo modificar la reunion.");
    }
});
exports.putWebinar = putWebinar;
const deleteWebinar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield Webinars_model_1.default.findByIdAndDelete(req.params.id);
    res.json({ message: 'Healthy Foods deleted' });
});
exports.deleteWebinar = deleteWebinar;
//# sourceMappingURL=webinars.controller.js.map
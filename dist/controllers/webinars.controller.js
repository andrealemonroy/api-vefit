"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWebinar = exports.putWebinar = exports.postWebinar = exports.getWebinar = exports.getWebinars = void 0;
const Webinars_model_1 = __importDefault(require("../models/Webinars.model"));
const getWebinars = async (req, res) => {
    const webinars = await Webinars_model_1.default.find();
    res.status(200).json(webinars);
};
exports.getWebinars = getWebinars;
const getWebinar = async (req, res) => {
    const { id } = req.params;
    const webinars = await Webinars_model_1.default.findById(id);
    res.status(200).json(webinars);
};
exports.getWebinar = getWebinar;
const postWebinar = async (req, res) => {
    const { titulo, fechaYHora, link, responsables } = req.body;
    try {
        const newWebinar = await Webinars_model_1.default.create({
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
};
exports.postWebinar = postWebinar;
const putWebinar = async (req, res) => {
    const { id } = req.params;
    const { titulo, fechaYHora, link, responsables } = req.body;
    try {
        const idWebinar = await Webinars_model_1.default.findByIdAndUpdate(id, {
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
};
exports.putWebinar = putWebinar;
const deleteWebinar = async (req, res) => {
    await Webinars_model_1.default.findByIdAndDelete(req.params.id);
    res.json({ message: 'Healthy Foods deleted' });
};
exports.deleteWebinar = deleteWebinar;

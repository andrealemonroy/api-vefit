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
exports.putAppointmentSchedule = exports.postAppointmentSchedule = exports.getAppointmentSchedule = void 0;
const AppointmentSchedule_model_1 = __importDefault(require("../models/AppointmentSchedule.model"));
const getAppointmentSchedule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentSchedule = yield AppointmentSchedule_model_1.default.find();
    res.status(200).json(appointmentSchedule);
});
exports.getAppointmentSchedule = getAppointmentSchedule;
const postAppointmentSchedule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Paciente, FechaYHoraCita, Nutricionista, PagoRealizado, CreatedFrom } = req.body;
    try {
        const appointmentSchedule = yield AppointmentSchedule_model_1.default.create({
            Paciente, FechaYHoraCita, Nutricionista, PagoRealizado, CreatedFrom
        });
        res.status(201).json(appointmentSchedule);
    }
    catch (error) {
        res.status(400).send('No se pudo agendar la reunion');
    }
});
exports.postAppointmentSchedule = postAppointmentSchedule;
const putAppointmentSchedule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointmentSchedule = yield AppointmentSchedule_model_1.default.findByIdAndUpdate(req.params._id, req.body, {
            new: true,
        });
        res.status(201).json(appointmentSchedule);
    }
    catch (error) {
        res.status(400).send('No se realizar cambio en agenda de reuniones');
    }
});
exports.putAppointmentSchedule = putAppointmentSchedule;
//# sourceMappingURL=appointmentSchedule.controller.js.map
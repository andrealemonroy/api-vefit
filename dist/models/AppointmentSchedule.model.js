"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AppointmentScheduleSchema = new mongoose_1.Schema({
    Paciente: {
        type: Object,
        required: true
    },
    FechaYHoraCita: {
        type: String,
        required: true
    },
    Nutricionista: {
        type: Object,
        required: true
    },
    PagoRealizado: {
        type: Boolean,
        required: true
    },
    CreatedFrom: {
        type: String,
        enum: ['admin', 'client'],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});
exports.default = (0, mongoose_1.model)("AppointmentSchedule", AppointmentScheduleSchema);
//# sourceMappingURL=AppointmentSchedule.model.js.map
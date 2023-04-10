import {Schema, model} from 'mongoose'
import { User } from './User.model';

export interface IAppointmentSchedule {
    Paciente: User;
    FechaYHoraCita: string;
    Nutricionista: User;
    PagoRealizado: boolean;
    CreatedFrom: 'admin' | 'client';
    createdAt: Date;
    updatedAt: Date;
}

const AppointmentScheduleSchema = new Schema({
    Paciente:{
        type: Object,
        required: true
    },
    FechaYHoraCita:{
        type: String,
        required: true
    },
    Nutricionista:{
        type: Object,
        required: true
    },
    PagoRealizado:{
        type: Boolean,
        required: true
    },
    CreatedFrom: {
        type: String,
        enum: ['admin', 'client'],
        required: true,
      },
    createdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    }  
})

export default model<IAppointmentSchedule>("AppointmentSchedule", AppointmentScheduleSchema);
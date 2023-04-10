import { Router } from "express";
import * as appointmentSchedule from '../controllers/appointmentSchedule.controller'

const appointmentScheduleRouter = Router();

appointmentScheduleRouter.get('/appointmentSchedule', appointmentSchedule.getAppointmentSchedule);
appointmentScheduleRouter.post('/appointmentSchedule', appointmentSchedule.postAppointmentSchedule);
appointmentScheduleRouter.put('/appointmentSchedule/:_id', appointmentSchedule.putAppointmentSchedule);


export default appointmentScheduleRouter;
import AppointmentSchedule from '../models/AppointmentSchedule.model';

export const getAppointmentSchedule = async (req: any, res: any) =>{
    const appointmentSchedule = await AppointmentSchedule.find();
    res.status(200).json(appointmentSchedule);
}

export const postAppointmentSchedule = async (req: any, res: any) =>{
    const {Paciente, FechaYHoraCita, Nutricionista, PagoRealizado, CreatedFrom} = req.body

    try {
        const appointmentSchedule = await AppointmentSchedule.create({
            Paciente, FechaYHoraCita, Nutricionista, PagoRealizado, CreatedFrom
        });
        res.status(201).json(appointmentSchedule);
    } catch (error) {
        res.status(400).send('No se pudo agendar la reunion');
    }
}

export const putAppointmentSchedule = async (req: any, res: any) =>{
    try {
        const appointmentSchedule = await AppointmentSchedule.findByIdAndUpdate(
            req.params._id,
            req.body,
            {
              new: true,
            }
        ); 
        res.status(201).json(appointmentSchedule);
    } catch (error) {
        res.status(400).send('No se realizar cambio en agenda de reuniones');
    }
}

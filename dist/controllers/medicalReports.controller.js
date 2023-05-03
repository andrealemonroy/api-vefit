import MedicalReport from '../models/MedicalReport.model';
export const getMedicalReports = async (req, res) => {
    const medicalReports = await MedicalReport.find();
    res.json(medicalReports);
};
export const getMedicalReport = async (req, res) => {
    const medicalReport = await MedicalReport.findById(req.params.id);
    res.json(medicalReport);
};
export const createMedicalReport = async (req, res) => {
    const medicalReport = await MedicalReport.create(req.body);
    res.json(medicalReport);
};
export const updateMedicalReport = async (req, res) => {
    const medicalReport = await MedicalReport.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json(medicalReport);
};
export const deleteMedicalReport = async (req, res) => {
    await MedicalReport.findByIdAndDelete(req.params.id);
    res.json({ message: 'Medical Report deleted' });
};
//# sourceMappingURL=medicalReports.controller.js.map
import MedicalReport from '../models/MedicalReport.model';

export const getMedicalReports = async (req: any, res: any) => {
  const medicalReports = await MedicalReport.find();
  res.json(medicalReports);
};

export const getMedicalReport = async (req: any, res: any) => {
  const medicalReport = await MedicalReport.findById(req.params.id);
  res.json(medicalReport);
};

export const createMedicalReport = async (req: any, res: any) => {
  const medicalReport = await MedicalReport.create(req.body);
  res.json(medicalReport);
};

export const updateMedicalReport = async (req: any, res: any) => {
  const medicalReport = await MedicalReport.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.json(medicalReport);
};

export const deleteMedicalReport = async (req: any, res: any) => {
  await MedicalReport.findByIdAndDelete(req.params.id);
  res.json({ message: 'Medical Report deleted' });
};


import Diseases from '../models/Diseases.model';

export const createDisease = async (req: any, res: any): Promise<Response> => {
  try {
    const disease = await Diseases.create(req.body);
    return res.json(disease);
  } catch (error) {
    return res.status(500).json({
      message: 'Error creating disease',
      error,
    });
  }
};

export const getDisease = async (req: any, res: any): Promise<Response> => {
  const disease = await Diseases.find();
  return res.json(disease);
};

export const updateDisease = async (req: any, res: any): Promise<Response> => {
  const disease = await Diseases.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.json(disease);
};

export const deleteDisease = async (req: any, res: any): Promise<Response> => {
  const disease = await Diseases.findByIdAndDelete(req.params.id);
  return res.json({
    message: 'Enfermedad eliminada',
  })
};

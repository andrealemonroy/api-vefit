import Aliment from '../models/Aliment.model';

export const getAliments = async (req: any, res: any): Promise<Response> => {
  const aliments = await Aliment.find();
  return res.json(aliments);
};

export const createAliment = async (req: any, res: any): Promise<Response> => {
  try {
    const aliment = new Aliment(req.body);
    await aliment.save();
    return res.json(aliment);
  } catch (error) {
    return res.status(500).json({
      message: 'Error creating aliment',
      error,
    });
  }
};

export const getAliment = async (req: any, res: any): Promise<Response> => {
  const aliment = await Aliment.findById(req.params.id);
  return res.json(aliment);
};

export const deleteAliment = async (req: any, res: any): Promise<Response> => {
  const aliment = await Aliment.findByIdAndDelete(req.params.id);
  console.log(aliment);
  return res.json(aliment);
};

export const updateAliment = async (req: any, res: any): Promise<Response> => {
  const aliment = await Aliment.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.json(aliment);
};

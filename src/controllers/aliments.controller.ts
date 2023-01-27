import Aliment from "../models/Aliment.model";

export const getAliments = async (
  req: any,
  res: any
): Promise<Response> => {
  const aliments = await Aliment.find();
  return res.json(aliments);
};

export const createAliment = async (
  req: any,
  res: any
): Promise<Response> => {
  const newAliment = new Aliment(req.body);
  const alimentSaved = await newAliment.save();
  return res.json(alimentSaved);
};

export const getAliment = async (
  req: any,
  res: any
): Promise<Response> => {
  const aliment = await Aliment.findById(req.params.id);
  return res.json(aliment);
};

export const deleteAliment = async (
  req: any,
  res: any
): Promise<Response> => {
  const aliment = await Aliment.findByIdAndDelete(req.params.id);
  return res.json(aliment);
};

export const updateAliment = async (
  req: any,
  res: any
): Promise<Response> => {
  const alimentUpdated = await Aliment.findByIdAndUpdate(req.params.id);
  return res.json(alimentUpdated);
};

import HealthyFoods from '../models/HealthyFoods.model';


export const getHealthyFoods = async (req: any, res: any) => {
  const healthyFoods = await HealthyFoods.find();
  res.json(healthyFoods);
};

export const getHealthyFood = async (req: any, res: any) => {
  const healthyFood = await HealthyFoods.findById(req.params.id);
  res.json(healthyFood);
};

export const createHealthyFoods = async (req: any, res: any) => {
  const healthyFoods = await HealthyFoods.create(req.body);
  res.json(healthyFoods);
};

export const updateHealthyFoods = async (req: any, res: any) => {
  const healthyFoods = await HealthyFoods.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.json(healthyFoods);
};

export const deleteHealthyFoods = async (req: any, res: any) => {
  await HealthyFoods.findByIdAndDelete(req.params.id);
  res.json({ message: 'Healthy Foods deleted' });
};


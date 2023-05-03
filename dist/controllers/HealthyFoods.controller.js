import Recipes from '../models/Recipes.model';
export const getHealthyFoods = async (req, res) => {
    const healthyFoods = await Recipes.find();
    res.json(healthyFoods);
};
export const getHealthyFood = async (req, res) => {
    const healthyFood = await Recipes.findById(req.params.id);
    res.json(healthyFood);
};
export const createHealthyFoods = async (req, res) => {
    const healthyFoods = await Recipes.create(req.body);
    res.json(healthyFoods);
};
export const updateHealthyFoods = async (req, res) => {
    const healthyFoods = await Recipes.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json(healthyFoods);
};
export const deleteHealthyFoods = async (req, res) => {
    await Recipes.findByIdAndDelete(req.params.id);
    res.json({ message: 'Healthy Foods deleted' });
};
//# sourceMappingURL=healthyFoods.controller.js.map
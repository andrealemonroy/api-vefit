import Ingredients from '../models/Ingredient.model';


export const getIngredients = async (req: any, res: any) => {
  const ingredients = await Ingredients.find();
  res.json(ingredients);
};

export const getIngredient = async (req: any, res: any) => {
  const ingredient = await Ingredients.findById(req.params.id);
  res.json(ingredient);
};

export const createIngredient = async (req: any, res: any) => {
  const ingredient = await Ingredients.create(req.body);
  res.json(ingredient);
};

export const updateIngredient = async (req: any, res: any) => {
  const ingredient = await Ingredients.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.json(ingredient);
};

export const deleteIngredient = async (req: any, res: any) => {
  await Ingredients.findByIdAndDelete(req.params.id);
  res.json({ message: 'Ingredients deleted' });
};


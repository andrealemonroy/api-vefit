import Categories from '../models/Categories.model';
import Ingredients from '../models/Ingredient.model';


export const createCategory = async (req: any, res: any): Promise<Response> => {
    try {
        const category = await Categories.create(req.body);
        return res.json(category);
    } 
    catch (error) {
      return res.status(500).json({
        message: 'Error creating category',
        error,
      });
    }
};

export const getCategory = async (req: any, res: any): Promise<Response> => {
    const category = await Categories.find();
    return res.json(category);
};

export const getCategoryByIngredients = async (req: any, res: any) => {
  try {

      const category = await Categories.findOne({name: req.query.name})
      const ingredients = await Ingredients.find({category: category._id}).populate('category')
     res.json(ingredients);
  } catch (error) {
     console.log(error.message);
  }
}

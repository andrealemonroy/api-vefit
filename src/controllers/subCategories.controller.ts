import SubCategories from '../models/Subcategories.model';
import Ingredients from '../models/Ingredient.model';

export const createSubCategory = async (req: any, res: any): Promise<Response> => {
  try {
    const subcategory = await SubCategories.create(req.body);
    return res.json(subcategory);
  } catch (error) {
    return res.status(500).json({
      message: 'Error creating subcategory',
      error,
    });
  }
};

export const getSubCategory = async (req: any, res: any): Promise<Response> => {
  const subcategory = await SubCategories.find();
  return res.json(subcategory);
};

export const getSubCategoryByIngredients = async (req: any, res: any) => {
  try {
    const name = req.query.name;
    const subCategory = await SubCategories.findOne({ name }); // Buscar la categoría con su producto por nombre en la base de datos
    if (!subCategory) {
      return res.status(404).json({
        message: `No se encontró una categoría con el nombre "${name}"`,
      });
    }
    const ingredients = await Ingredients.find({
      subCategory: subCategory._id,
    }).populate('subCategory');
    res.json(ingredients);
  } catch (error: any) {
    console.log(error.message);
    res
      .status(500)
      .json({ message: 'Error al obtener la categoría de ingredientes' });
  }
};

export const updateSubCategory = async (req: any, res: any): Promise<Response> => {
  const subCategory = await SubCategories.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.json(subCategory);
};

export const deleteSubCategory = async (req: any, res: any): Promise<Response> => {
  const subCategory = await SubCategories.findByIdAndDelete(req.params.id);
  console.log(subCategory);
  return res.json(subCategory);
};

import Categories from '../models/Categories.model';



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
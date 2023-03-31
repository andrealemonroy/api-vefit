import User from "../models/User.model";

export const getUsers = async (req: any, res: any) => {
    const users = await User.find();
    res.json(users);
}

export const getUser = async (req: any, res: any) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}

export const register = async (req: any, res: any) => {
    const { name, email, password } = req.body;
    const validator = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    try {
        if(validator.test(email)){
            const eMailVerification = await User.findOne({email});
                if(eMailVerification){
                    return res.status(400).send('El correo electrónico ya está en uso.');
                } 
            const users = await User.create({name, email, password});
            return res.status(201).json(users);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al Registarse');
    }
    res.status(400).send('no es un email valido');
}

export const deleteUser = async (req: any, res: any) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
  };
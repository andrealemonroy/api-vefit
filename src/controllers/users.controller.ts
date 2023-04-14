import User, { UserI } from "../models/User.model";
import {Request,Response} from 'express'

export const getUsers = async (req: any, res: any) => {
    const users = await User.find();
    res.json(users);
}

export const getUser = async (req: any, res: any) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}



export const updateUser = async (req: Request, res: Response): Promise<Response<UserI, Record<string, any>>>=>{
    const {id}= req.params //capturo el id del usuario de la URL
    try {
        const user : UserI = await User.findById(id); // busca si el usuario existe en la base de datos

        if (!user) {
          return res.status(404).send('User not found');
        }
        const userUpdate : UserI = await User.findByIdAndUpdate( {_id : id}, req.body,{new: true}) // busca y actualiza al usuario en la base de datos devuelve el usuario actualizado
        
        return res.status(200).json(userUpdate);
    } catch (error) {
        console.log(error.message);
        throw new Error(error.message);
    }
}

export const updateDiseases = async (req: Request, res: Response): Promise<Response<UserI,Record<string, any>>>=>{
    const {id}= req.params //capturo el id del usuario de la URL
    const {disease}= req.body 

    try {
        const user : UserI = await User.findById({_id: id})
        const diseasesIndex: number = user.diseases.indexOf(disease) 
        console.log(diseasesIndex)
        if(diseasesIndex === -1) {
            return res.status(404).send('desease not found')
        }
        user.diseases.splice(diseasesIndex,1) // elimina el indice requerido 
        await user.save()
        return res.status(200).json(user)
    } catch (error) {
        throw new Error(error.message);
        
    }
}

export const deleteUser = async (req: any, res: any) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
  };


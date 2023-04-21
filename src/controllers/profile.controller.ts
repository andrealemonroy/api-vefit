import { Request, Response } from "express";
import Profile, { ProfileI } from "../models/Profile.model";
import UserCapa1, { UserCapa1I } from "../models/UserCapa1.model";






const createProfile = async (req: Request, res: Response) => {
   const { idUser } = req.params;
   const { birthday, weight, height, diseases } = req.body;

   try {
      
      const newProfile = await Profile.create({birthday,weight,height,complete:true,diseases})
      
      
      // const disease = await diseaseModel.findOne({name: diseases})
      
      // newProfile.diseases.push(disease)
      // await newProfile.save()
      
      const user = await UserCapa1.findByIdAndUpdate(idUser,{ profile: newProfile },{new:true}).populate({path:'profile'})
      
    

    return res.status(201).json(user.profile);    
   } catch (error) {
    console.log(error.message);
    return res.status(500).send(error.message);
   }

};

export default {
    
    createProfile,
}

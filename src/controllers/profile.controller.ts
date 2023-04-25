import { Request, Response } from "express";
import Profile, { ProfileI } from "../models/Profile.model";
import UserCapa1, { UserCapa1I } from "../models/UserCapa1.model";

const createProfile = async (req: Request, res: Response) => {
   const { idUser } = req.params;
   const { birthday, weight, height, diseases } = req.body;

   try {
      const newProfile = await Profile.create({
         birthday,
         weight,
         height,
         complete: true,
         diseases,
      });

      if (!weight || !height) {
         return res
            .status(400)
            .send({ message: "Tu peso y altura son necesarios" });
      }

      const user = await UserCapa1.findByIdAndUpdate(
         idUser,
         { profile: newProfile },
         { new: true }
      ).populate({ path: "profile" });

      return res.status(201).json(user.profile);
   } catch (error) {
      console.log(error.message);
      return res.status(500).send(error.message);
   }
};

const updateProfile = async (req: Request, res: Response) => {
   const { idUser } = req.params;
   try {
      const user: UserCapa1I = await UserCapa1.findById(idUser).populate({
         path: "profile",
      });

      const newProfile: ProfileI = await Profile.findByIdAndUpdate(
         user.profile._id,
         req.body,
         { new: true }
      );

      user.profile = newProfile;
      await user.save();

      return res.status(200).json(user);
   } catch (error) {
      console.log(error.message);
      return res.status(500).send(error.message);
   }
};

const delteDesease = async (req: Request, res: Response) => {
   const  { idUser } = req.params;
   const desease = req.body;

   try {
      if (!desease) {
         return res.status(400).send("Que enfermedad deseas eliminar de tu lista.")
      }
      
      const user: UserCapa1I = await UserCapa1.findById(idUser).populate({path: "profile"})
      
      user.profile.diseases = user.profile.diseases.filter(e => e.name !== desease.name)
      await user.profile.save()

      return res.status(200).send(user)
   } catch (error) {
      console.log(error.message);
   }

}


export default {
   createProfile,
   updateProfile,
   delteDesease
};
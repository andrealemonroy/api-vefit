import passport from "passport";
import User from "../models/User.model";
import { Strategy as Auth0Strategy } from "passport-auth0";
require('dotenv').config()
const{AUTH0_DOMAIN,AUTH0_CLIENT_ID,AUTH0_CLIENT_SECRET }= process.env


//se define la estartegia de passport para usar auth0
export const configPassport = passport.use(
   "auth0",
   new Auth0Strategy(
      {
         domain:AUTH0_DOMAIN,
         clientID: AUTH0_CLIENT_ID,
         clientSecret:AUTH0_CLIENT_SECRET,
            
         callbackURL: "http://localhost:4000/callback",
         
         
      },
      // aqui se manejan los datos del usuario y se almasenan en la ase de datos
      async function (
         accessToken: any,
         refreshToken: any,
         extraParams: any,
         profile: any,
         done: any
      ) {
         let user = await User.findOne({ sub: profile.id}) || await User.findOne({ email: profile.emails[0].value });
         
         if(!user){
            const userRegistre = new User({
               name: profile.displayName,
               email: profile.emails[0].value,
               sub : profile.id,
               
            })
            await userRegistre.save()
            
         }
         return done(null, profile);
      }
   )
);

export const serializarUser = passport.serializeUser(function (user: any, done: any) {  
   
   done(null, user.id);
});

export const deserializeUser = passport.deserializeUser(function (id: any, done: any) {
   User.findOne({ sub: id }, (err: any, user: any) => {
      
      done(err, user);
   });
});

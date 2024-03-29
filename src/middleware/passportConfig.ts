import passport from 'passport';

import UserCapa1, { UserCapa1I } from '../models/UserCapa1.model';
import { Strategy as Auth0Strategy } from 'passport-auth0';
require('dotenv').config();

export const configPassport = passport.use(
  'auth0',
  new Auth0Strategy(
    {
      domain: process.env.AUTH0_DOMAIN || '',
      clientID: process.env.AUTH0_CLIENT_ID || '',
      clientSecret: process.env.AUTH0_CLIENT_SECRET || '',

      callbackURL: 'http://localhost:4000/callback',
    },
    // aqui se manejan los datos del usuario y se almasenan en la ase de datos
    async function (
      accessToken: any,
      refreshToken: any,
      extraParams: any,
      profile: any,
      done: any
    ) {
      let user =
        (await UserCapa1.findOne({ sub: profile.id })) ||
        (await UserCapa1.findOne({ email: profile.emails[0].value }));

      if (!user) {
        console.log('estoy aqui', profile);
        const userRegistre = new UserCapa1({
          name: profile.displayName,
          email: profile.emails[0].value,
          sub: profile.id,
        });
        await userRegistre.save();
      }
      return done(null, profile);
    }
  )
);

export const serializarUser = passport.serializeUser((user: any, done: any) => {
  done(null, user.id);
});

export const deserializeUser = passport.deserializeUser(
  (id: any, done: any) => {
    UserCapa1.findById(id, (err: any, user: any) => {
      done(err, user);
    });
  }
);

import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../../models/model.user.js";

export default function configureGoogleStrategy(passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URI,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          let email = null;

          //check is there is an email with a length and value otherwise error
          if (
            profile.emails &&
            profile.emails.length > 0 &&
            profile.emails[0].value
          ) {
            email = profile.emails[0].value;
          } else {
            // Handle the case where email is not provided
            throw new Error("No email address found in Google profile");
          }

          // find one user in the database with that google id
          let user = await User.findOne({
            "authProviders.google.id": profile.id,
          });
          // if that id doesnt exist anywhere create new user
          if (!user) {
            user = await User.create({
              username: profile.displayName,
              email: email,
              profileImage: profile.photos[0].value,
              authProviders: {
                google: { id: profile.id },
              },
              isEmailVerified: true,
            });
          }
          // show that it was successfull with done function provided by passport
          return done(null, user);
        } catch (err) {
          // show no success return error
          return done(err, null);
        }
      }
    )
  );
}

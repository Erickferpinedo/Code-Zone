import passport from "passport";
import configureGoogleStrategy from "./authStrategies/googleStrategy.js";
import configureGithubStrategy from "./authStrategies/githubStrategy.js";
import User from "../models/model.user.js";

export default function configurePassport() {

    configureGoogleStrategy(passport);
    configureGithubStrategy(passport);


    passport.serializeUser((user, done) => {
        console.log("Seralizing User ID:", user.id);
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
          console.log("Deserializing User ID:", id);
          const user = await User.findById(id);
          console.log("User found in deserialization:", user);
          done(null, user);
        } catch (error) {
          console.error("Error in deserializing user:", error);
          done(error, null);
        }
      });
      
};


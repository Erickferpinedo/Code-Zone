import passport from "passport";
import configureGoogleStrategy from "./authStrategies/googleStrategy.js";
import configureGithubStrategy from "./authStrategies/githubStrategy.js";
import User from "../models/model.user.js";

export default function configurePassport() {

    configureGoogleStrategy(passport);
    configureGithubStrategy(passport);


    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
          console.log("Deserializing user ID:", id);
          const user = await User.findById(id);
          console.log("Deserialized User:", user);
          done(null, user);
        } catch (err) {
          console.error("Error in deserializeUser:", err);
          done(err, null);
        }
      });
      
};


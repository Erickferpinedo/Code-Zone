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
        try{
            const user = await User.findById(id);
            done(null, user);
        } catch (err) {
            done(err, null);
        }
    });
}
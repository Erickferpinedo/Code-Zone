import passport from "passport";
import configureGoogleStrategy from "./authStrategies/googleStrategy.js";
import configureGithubStrategy from "./authStrategies/githubStrategy.js";
import User from "../models/model.user.js";

export default function configurePassport() {
    configureGoogleStrategy(passport);
    configureGithubStrategy(passport);

    // Serialize user
    passport.serializeUser((user, done) => {
        console.log("Serializing User ID:", user._id || user.id); // Log the ID
        done(null, user._id.toString() || user.id); // Save user ID into the session
    });

    // Deserialize user
    passport.deserializeUser(async (id, done) => {
        try {
            console.log("Deserializing User ID:", id); // Log the ID from session
            const user = await User.findById(id);
            console.log("User found in deserialization:", user);
            done(null, user); // Attach user to req.user
        } catch (error) {
            console.error("Error in deserializing user:", error);
            done(error, null);
        }
    });
}

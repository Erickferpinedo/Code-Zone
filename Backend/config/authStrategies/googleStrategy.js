import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../../models/model.user.js";

export default function configureGoogleStrategy(passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URI,
        passReqToCallback: true,
      },
      async (req, accessToken, refreshToken, profile, done) => {
        try {
          console.log("Google Profile:", profile); // Log profile details
      
          const email = profile.emails?.[0]?.value;
          if (!email) throw new Error("No email address found in Google profile");
      
          let user = await User.findOne({ "authProviders.google.id": profile.id });
          if (!user) {
            user = await User.create({
              username: profile.displayName,
              email: email,
              profileImage: profile.photos?.[0]?.value || "",
              authProviders: {
                google: { id: profile.id },
              },
              isEmailVerified: true,
            });
          }
      
          console.log("User found or created:", user); // Log the user object
          return done(null, user); // Pass the user object to serializeUser
        } catch (err) {
          console.error("Error in Google Strategy:", err);
          return done(err, null);
        }
      }
      
    )
  );
}

import { Strategy as GithubStrategy } from "passport-github2";
import User from "../../models/model.user.js";

export default function configureGithubStrategy(passport) {
  passport.use(
    new GithubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.GITHUB_CALLBACK_URI,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          // verify if the profile has an email shown by default
          let emails = [];
          if (profile.emails && profile.emails.length > 0) {
            emails = profile.emails;
          } else {
            //otherwise we use the access token to grab their email using githubs api
            const response = await fetch("https://api.github.com/user/emails", {
              headers: {
                Authorization: `token ${accessToken}`,
                "User-Agent": "Code-Zone",
              },
            });

            // If we cant access it error is thrown
            if (!response.ok) {
              throw new Error("Failed to fetch emails from Github API");
            }
            //Emails are converted to .json for us to use
            emails = await response.json();
          }

          //From that Json file find the primary email that is verified otherwise throw error
          // this is specifically needed for github because emails are now shown public by default
          let email;
          let primaryEmailObj = emails.find((e) => e.primary && e.verified);

          if (primaryEmailObj && primaryEmailObj.email) {
            email = primaryEmailObj.email;
          } else if (emails.length > 0 && emails[0].email) {
            email = emails[0].email;
          } else {
            email = null;
            throw new Error("No email address found for this user");
          }

          let user = await User.findOne({
            "authProviders.github.id": profile.id,
          });

          // if that user doesnt already exist create them and add to database
          if (!user) {
            user = await User.create({
              username: profile.displayName,
              email: email,
              profileImage: profile.photos[0].value,
              authProviders: {
                github: { id: profile.id },
              },
              isEmailVerified: true,
            });
          }
          //return success through passport function done
          return done(null, user);
        } catch (err) {
          //return failure through passport function done
          return done(err, null);
        }
      }
    )
  );
}

import express from "express";
import passport from "passport";

const router = express.Router();

// Route to initiate Google authentication
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

//route for github
router.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

//destination after route success (callback)
router.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("http://localhost:3000/log-prob");
  }
);

// Google callback route
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    // Successful authentication
    res.redirect("http://localhost:3000/log-prob"); // Or redirect to desired route
  }
);

//Log out logic
router.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    req.session.destroy(function (err) {
      if (err) {
        console.error("Error destroying session: ", err);
      }
      res.clearCookie("connect.sid");
      res.redirect("/");
    });
  });
});

export default router;

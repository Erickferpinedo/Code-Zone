import express from "express";
import passport from "passport";

const router = express.Router();

// Route to initiate Google authentication
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"], keepSessionInfo: true })
);

//route for github
router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

//destination after route success (callback)
router.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("https://code-z0ne.vercel.app/home");
  }
);

// Google callback route
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    req.session.save((err) => {
      if (err) {
        console.error("Session save error:", err);
        return res.status(500).json({ message: "Session save failed" });
      }
      console.log("Session after save:", req.session); // Log session data
      res.redirect("https://code-z0ne.vercel.app/home");
    });
  }
);


// checks if the user is verified 
router.get("/session", (req, res) => {
  console.log("Session:", req.session);
  console.log("Authenticated User:", req.user);
  if (req.isAuthenticated()) {
    res.status(200).json({authenticated: true, user: req.user});
  } else {
    res.status(401).json({authenticated: false});
  }
});

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
      res.redirect("https://code-z0ne.vercel.app");
    });
  });
});

export default router;

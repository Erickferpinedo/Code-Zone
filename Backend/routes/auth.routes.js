import express from "express";
import passport from "passport";

const router = express.Router();

// Route to initiate Google authentication
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
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
    res.redirect("http://localhost:3000/log-prob");
  }
);

// Google callback route
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
    // Successful authentication
    res.redirect("http://localhost:3000/log-prob"); // Or redirect to desired route
  }
);

// checks if the user is verified 
router.get("/session", (req, res) => {
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
      res.redirect("http://localhost:3000");
    });
  });
});

router.get('/check', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ authenticated: true, user: req.user });
  } else {
    res.json({ authenticated: false });
  }
});

export default router;

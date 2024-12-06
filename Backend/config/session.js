import session from "express-session";
import MongoStore from "connect-mongo";
// Creates a session for the user when app in use
export function configureSession(app) {
  app.use(
    session({
      secret: process.env.EXPRESS_SESSION_ID,
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({
        mongoUrl: process.env.DB_CONNECTION_STRING,
        collectionName: "sessions",
      }),
      cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
      },
    })
  );
}

// This will check if the user is authenticated
export const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.status(401).json({message: "Unauthorized"});
  }
};


const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/user.route.js');
const app = express()
app.use(express.json());
const PORT = process.env.PORT || 3000; 

app.use(express.json());

//route for users
app.use("/api/users", userRoute);

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});


// Connect to Database and start application
mongoose.connect('mongodb+srv://Backend-Team:arih3eFfQ1dFnzWv@backend.hxs8s.mongodb.net/Backend?retryWrites=true&w=majority&appName=Backend')
  .then(() => {
    console.log("Connected to database!");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    })
  })
  .catch((error) => {
    console.log("Connection Not Made", error);
  });
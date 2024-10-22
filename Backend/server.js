const express = require('express')
const app = express()
app.use(express.json());
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000; 
const User = require('./models/model.user.js');

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// get response
app.get('/api/users', async (req, res) => {
  try{
    const user = await User.find({});
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

// post request 
app.post('/api/users', async (req, res) => {
  try{
    const users = await User.create(req.body);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
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
    console.log("Connection failed", error);
  });
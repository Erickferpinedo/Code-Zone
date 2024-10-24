const User = require('../models/model.user.js');

const createUser = async (req, res) => {
    try{
        const user = await User.create(req.body);
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({message: error.message});
      }
};

const getUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const updatedUser = await User.findByIdAndUpdate(id, req.body, {new: true});
        if (!updateUser){
            return res.status(404).json({message: "User Is Not Found"})
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user){
            return res.status(404).json({message: "User Is Not Found"});
        }
        res.status(200).json({message: "User Deleted Successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// exports all functions
module.exports = {
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser,
}
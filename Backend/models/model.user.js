const mongoose = require('mongoose');

//Temporary for demonstration please change
const UserSchema = mongoose.Schema(
    {           
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        Timestamp: true,
    }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
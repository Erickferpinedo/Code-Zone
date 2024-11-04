import mongoose from 'mongoose';

// Temporary for demonstration, please change
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
        timestamps: true, // Note: 'timestamps' should be in lowercase
    }
);

// Model creation for User
const User = mongoose.model("User", UserSchema);

// Export to database
export default User;

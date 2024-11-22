import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    profileImage: {
      type: String,
    },
    authProviders: {
      // set to map to have it default for other  authentications google, github, Auth0
      type: Map,
      // specifies how map will be handled
      of: new mongoose.Schema({
        id: { type: String, unique: true, sparse: true },
      }),
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);

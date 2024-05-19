import { Schema, model, models } from "mongoose";

// Define the user schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
    },
    role: {
      type: String,
      enum: ["client", "admin"],
      default: "client",
    },
  },
  { timestamps: true }
);

// Create the User model
const User = models?.User || model("User", userSchema);

export default User;

import mongoose from "mongoose";

const User = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },

  active: {
    type: Boolean,
    default: true,
  }

})

export default mongoose.model("User", User)
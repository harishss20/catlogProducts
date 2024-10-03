import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const userFrom = model("userCollections", userSchema);

export default userFrom;

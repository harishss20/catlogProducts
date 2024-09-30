import { Schema, model } from "mongoose";

const schema1 = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const catLogProducts = model("productdatas", schema1);

export default catLogProducts;

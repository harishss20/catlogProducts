import catLogProducts from "../model/ecom.model1.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await catLogProducts.find();
    return res.status(200).json(products);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

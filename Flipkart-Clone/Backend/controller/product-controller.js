import Product from "../model/productSchema.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    return res.status(200).json(products);
  } catch (error) {
    console.log("Get Product Error:", error.message);
    return res.status(500).json({ Error_Message: error.message });
  }
};
 
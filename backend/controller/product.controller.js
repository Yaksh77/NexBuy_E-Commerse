import uploadOnCloudinary from "../config/cloudinary.js";
import Product from "../model/product.model.js";

export const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    const image1 = await uploadOnCloudinary(req.files.image1[0].path);
    const image2 = await uploadOnCloudinary(req.files.image2[0].path);
    const image3 = await uploadOnCloudinary(req.files.image3[0].path);
    const image4 = await uploadOnCloudinary(req.files.image4[0].path);

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      bestseller: bestseller === "true" ? true : false,
      date: Date.now(),
      image1,
      image2,
      image3,
      image4,
    };

    const product = await Product.create(productData);
    return res.status(201).json(product);
  } catch (error) {
    console.log("Add product error : ", error);
    return res.status(500).json({ message: `Add product error : ${error}` });
  }
};

export const listProducts = async (req, res) => {
  try {
    const product = await Product.find({});
    return res.status(200).json(product);
  } catch (error) {
    console.log("List products error : ", error);
    return res.status(500).json({ message: `List products error : ${error}` });
  }
};

export const removeProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    if (!productId)
      return res.status(400).json({ message: "Product ID required" });

    const product = await Product.findByIdAndDelete(productId);
    return res
      .status(200)
      .json({ message: "Product deleted successfully", product });
  } catch (error) {
    console.log("Remove product error : ", error);
    return res.status(500).json({ message: `Remove product error : ${error}` });
  }
};

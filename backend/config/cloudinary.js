import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const uploadOnCloudinary = async (filePath) => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  try {
    if (!filePath) {
      return null;
    }

    const cloudinaryResponse = await cloudinary.uploader.upload(filePath);
    fs.unlinkSync(filePath);
    return cloudinaryResponse.secure_url;
  } catch (error) {
    fs.unlinkSync(filePath);
    console.log(error);
  }
};

export default uploadOnCloudinary;

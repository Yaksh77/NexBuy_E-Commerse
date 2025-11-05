import { Router } from "express";
import { addProduct } from "../controller/product.controller.js";
import { upload } from "../middleware/multer.js";

const prdouctRouter = Router();

prdouctRouter.post(
  "/add-product",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);

export default prdouctRouter;

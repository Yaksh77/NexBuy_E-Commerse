import { Router } from "express";
import {
  addProduct,
  listProducts,
  removeProduct,
} from "../controller/product.controller.js";
import { upload } from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

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
prdouctRouter.get("/list-products", adminAuth, listProducts);
prdouctRouter.get("/remove-product/:productId", adminAuth, removeProduct);

export default prdouctRouter;

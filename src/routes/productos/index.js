import express from "express";
import adminAuth from "../../middlewares/adminAuth.js";
import userAuth from "../../middlewares/userAuth.js";
import * as productController from '../../controller/productosController.js'


const router = express.Router();

// api/productos

router.get("/", userAuth, productController.getProducts);

router.get("/:id", userAuth,productController.getProductById);

router.post("/", adminAuth, productController.createProduct);

router.put("/:id", adminAuth, productController.updateProduct);

router.delete("/:id", adminAuth, productController.deleteProducto);

export default router;

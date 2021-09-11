import express from "express";
import userAuth from "../../middlewares/userAuth.js";
import * as carritoController from '../../controller/carritoController.js'


const router = express.Router();

// api/carritos

router.get("/", userAuth, carritoController.getCarritos);

router.post("/", userAuth, carritoController.createCarrito);

router.delete("/:id", userAuth, carritoController.deleteCarrito);

router.put("/:id", userAuth, carritoController.updateCarrito);

export default router;

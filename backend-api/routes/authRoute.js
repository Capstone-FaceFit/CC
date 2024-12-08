import express from "express";
import {
  register,
  login,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/UserController.js";
import {
  createProduct,
  updateProduct,
  getAllProduct,
  getProductById,
  createProductsBulk,
} from "../controllers/EyeGlassController.js";
import { accessValidation } from "../middleware/middleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
//
router.get("/user", accessValidation, getUser);
router.patch("/user", accessValidation, updateUser);
router.delete("/user", accessValidation, deleteUser);

router.get("/eyeglass", accessValidation, getAllProduct);
router.post("/eyeglass", accessValidation, createProduct);
router.post("/eyeglasses", accessValidation, createProductsBulk);
router.patch("/eyeglass/:id", accessValidation, updateProduct);
router.get("/eyeglass/:id", accessValidation, getProductById);

export default router;

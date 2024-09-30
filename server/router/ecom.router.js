import express from "express";
import { getAllProducts } from "../controller/ecom.controller.js";
const ecomRouter = express.Router();

ecomRouter.get("/", getAllProducts);

export default ecomRouter;

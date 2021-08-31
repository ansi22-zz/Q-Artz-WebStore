import express from "express";
import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import data from "../data.js";

const router = express.Router();

router.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

router.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const product = new Product({
      name: req.body.name,
      image: req.body.image,
      price: req.body.price,
      stockcount: req.body.stockcount,
      content: req.body.content,
    });
    const newProduct = await product.save();
    if (newProduct) {
      return res
        .status(201)
        .send({ msg: "New Product Created", data: newProduct });
    }
    return res.status(500).send({ msg: "Error in creaing product" });
  })
);

router.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await Product.remove({});
    const createdProducts = await Product.insertMany(data);
    res.send({ createdProducts });
  })
);

router.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ msg: "Product Not Found" });
    }
  })
);

export default router;

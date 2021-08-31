import mongoose from "mongoose";

const prodctSchema = new mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  content: { type: String, required: true },
  price: { type: Number, default: 0, required: true },
  stockcount: { type: Number, default: 0, required: true },
});

const productModel = mongoose.model("Product", prodctSchema);

export default productModel;

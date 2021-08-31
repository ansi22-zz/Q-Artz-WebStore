import express from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import { getToken } from "../util.js";
import user from "../users.js";

const router = express.Router();

router.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    console.log(req.body.password);
    const signinUser = await User.findOne({
      email: req.body.email,
    });
    console.log(signinUser);
    if (signinUser) {
      if (bcrypt.compareSync(req.body.password, signinUser.password)) {
        res.send({
          _id: signinUser.id,
          name: signinUser.name,
          email: signinUser.email,
          isAdmin: signinUser.isAdmin,
          token: getToken(signinUser),
        });
        return;
      }
    } else {
      res.status(401).send({ msg: "💥Invalid Credentials!" });
    }
  })
);

router.post(
  "/signup",
  expressAsyncHandler(async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      isAdmin: false,
    });

    const newUser = await user.save();
    if (newUser) {
      res.send({
        _id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
        token: getToken(newUser),
      });
    } else {
      res.status(401).send({ message: "💥Invalid User Data." });
    }
  })
);

router.get(
  "/createadmin",
  expressAsyncHandler(async (req, res) => {
    await User.remove({});
    const createdUsers = await User.insertMany(user);
    res.send({ createdUsers });
  })
);

export default router;

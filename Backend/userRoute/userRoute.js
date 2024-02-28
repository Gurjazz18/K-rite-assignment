const express = require("express");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserModel } = require("../model/User.model");
const userRoute = express.Router();


//register.....................................................

userRoute.post("/register", async (req, res) => {
  const { email, password, name, age } = req.body;

  try {
    bcrypt.hash(password, 5, async (err, hashPass) => {
      if (err) {
        console.log(err);
      } else {
        let data = new UserModel({ email, password: hashPass, name, age });
        await data.save();
        res.send({
            "message":"register successfully",
             status:true,
        });
      }
    });
  } catch (error) {
    res.send({ error: "something went wrong" });
    console.log(error);
  }
});

//login .....................................

userRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email });

    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (result) {
          const token = jwt.sign({ userID:user[0]._id }, "masai");
          res.send({ msg: "user is login successfully", token: token });
        } else {
          res.send("wrong credentials");
        }
      });
    } else {
      res.send("wrong credentials");
    }
  } catch (error) {
    res.send({ error: "something went wrong " });
    console.log(error);
  }
});

module.exports = {
  userRoute,
};
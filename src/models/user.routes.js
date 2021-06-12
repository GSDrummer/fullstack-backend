const { Router } = require("express");
const { addUser, updateUser, login } = require("./user.controllers");
const userRouter = Router();
const { hashPassword } = require("../middleware");

userRouter.post("/users", hashPassword, addUser);
userRouter.post("/users/login", login);
userRouter.patch("users", hashPassword, updateUser);

module.exports = {
  userRouter,
};

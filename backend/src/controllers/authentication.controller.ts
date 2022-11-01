import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import UserModel from "../models/user.model";
import passport from "passport";

function createToken(user: Express.User) {
  return jwt.sign(
    { _id: user._id },
    process.env.JWT_SECRET || "DEFAULT_JWT_SECRET"
  );
}

export const login = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      res.status(401).json({ message: info.message });
      return;
    }
    res
      .status(200)
      .json({ token: createToken(user), message: "Login successfully" });
  })(req, res, next);
};

export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(422).json({ message: "All fields must be provided" });
  }

  let existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    return res.status(422).json({ message: "Email is already in use..." });
  }
  existingUser = await UserModel.findOne({ username });
  if (existingUser) {
    return res.status(422).json({ message: "Username is already in use..." });
  }

  const user = await new UserModel({
    username,
    email,
    password,
  }).save();

  return res.status(200).json({ token: createToken(user) });
};

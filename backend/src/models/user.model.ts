import { model, Schema } from "mongoose";
import bcrypt from "bcryptjs";
import { UserModelInterface } from "../interfaces";

const UserSchema = new Schema(
  {
    username: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

UserSchema.pre<UserModelInterface>("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.matchPassword = async function (
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

const UserModel = model<UserModelInterface>("User", UserSchema);

export default UserModel;

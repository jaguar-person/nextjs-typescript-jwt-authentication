import { Document } from "mongoose";

export interface UserModelInterface extends Document {
  username: string;
  email: string;
  password: string;
  matchPassword: (password: string) => Promise<boolean>;
}

declare global {
  namespace Express {
    interface User extends UserModelInterface {}
  }
}

import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import UserModel from "../models/user.model";

// Setting local strategy:
const localOptions = { usernameField: "username", passwordField: "password" };
const localLogin = new LocalStrategy(
  localOptions,
  async (username: string, password: string, done) => {
    try {
      const user = await UserModel.findOne({
        $or: [{ $or: [{ username }] }, { $or: [{ email: username }] }],
      });
      if (!user) {
        return done(null, false, { message: "Invalid username or email" });
      }
      const isMatch: boolean = await user.matchPassword(password);
      if (!isMatch) {
        return done(null, false, { message: "Invalid password " });
      }
      return done(null, user);
    } catch (e) {
      return done(null, false, {
        message: "Local login strategy: error in server",
      });
    }
  }
);

// Setting the jwt strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: process.env.JWT_SECRET,
};

const jwtLogin = new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    const user = await UserModel.findById(payload._id);
    if (user) {
      done(null, user);
    } else {
      done(null, false, { message: "Invalid token" });
    }
  } catch (e) {
    done(null, false, { message: "Jwt login strategy: error in server" });
  }
});

passport.use(localLogin);
passport.use(jwtLogin);

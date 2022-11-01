import express from "express";
import cookieParser from "cookie-parser";
import "./src/services/passport";

// Routes files
import AuthRoutes from "./src/routes/auth.routes";
import UserRoutes from "./src/routes/user.routes";

const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use("/api/authentication/", AuthRoutes);
app.use("/api/user/", UserRoutes);

export default app;

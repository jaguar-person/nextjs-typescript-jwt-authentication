/*

 @url /api/authentication

 */

import { Router } from "express";
import { login, register } from "../controllers/authentication.controller";
const router = Router();

router.post("/login", login);

router.post("/register", register);

export default router;

/*

 @url /api/user

 */

import { Router } from "express";
import { requireAuth } from "../middlewares/authentication";
import { getUserFromToken } from "../controllers/user.controller";

const router = Router();

router.get("/", requireAuth, getUserFromToken);

export default router;

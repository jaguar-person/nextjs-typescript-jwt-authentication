/*

 @url /

 */

import { Router } from "express";
import { nextApp } from "../../index";
const router = Router();

router.get("/", (req, res) => {
  return nextApp.render(req, res, "/", {});
});

router.get("/register", (req, res) => {
  if (req.cookies.token) {
    return res.redirect("/");
  } else {
    return nextApp.render(req, res, "/register", {});
  }
});

router.get("/login", (req, res) => {
  if (req.cookies.token) {
    return res.redirect("/");
  } else {
    return nextApp.render(req, res, "/login", {});
  }
});

router.get("/profile", (req, res) => {
  if (req.cookies.token) {
    return nextApp.render(req, res, "/profile", {});
  } else {
    return res.redirect("/");
  }
});

export default router;

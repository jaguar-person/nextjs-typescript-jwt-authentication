import { Request, Response } from "express";

export function getUserFromToken(req: Request, res: Response) {
  if (req.user) {
    const { user } = req;
    return res.status(200).json({ user });
  }
  return res.status(404).json({ message: "Not authorized" });
}

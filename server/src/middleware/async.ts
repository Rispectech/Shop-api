import { Request, Response } from "express";

const ErrorMiddleWare = (req: Request, res: Response) => {
  res.status(505).send("Route doesnt Exist");
};

export default ErrorMiddleWare;

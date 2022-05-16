import { Request, Response } from "express";

const getdummyhandler = (req: Request, res: Response) => {
  res.send("get dummy handler");
};

const getv1dummyhandler = (req: Request, res: Response) => {
  res.send(" v1 get dummy handler");
};

export { getdummyhandler, getv1dummyhandler };

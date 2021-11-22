import { Request, Response, NextFunction } from "express";

export const postAddProduct = (req: Request, res: Response, next: NextFunction) => {
    const jsonData = JSON.stringify(req.body); 
    res.status(201);
    console.log(jsonData);
    res.redirect('/');
  };
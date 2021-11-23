import { Request, Response, NextFunction } from "express";

import { ToDoItem } from '../model/todo';

export const postAddItem = (req: Request, res: Response, next: NextFunction) => {
    const jsonData = req.body; 
    const reqData = JSON.stringify(req.body.todoItem);
    res.status(201);
    const newToDoItem = new ToDoItem(reqData);
    //console.log(newToDoItem);
    newToDoItem.save();
    res.redirect('/');
  };
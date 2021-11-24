import { Request, Response, NextFunction } from "express";

import { ToDoItem } from '../model/todo';

export const postAddItem = (req: Request, res: Response, next: NextFunction) => {
  try {
    const jsonData = req.body; 
    const reqData = JSON.stringify(req.body.todoItem);
    const newToDoItem = new ToDoItem(reqData);
    newToDoItem.save();
    res.status(200).redirect('/');
  } catch (err) {
    console.log('error: ' + err);
    
  }
  };
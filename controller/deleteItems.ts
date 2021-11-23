import { Request, Response, NextFunction } from "express";

import { ToDoItem } from '../model/todo';

export const deleteItems = (req: Request, res: Response, next: NextFunction) => {
    const fetch = new ToDoItem('..');
    fetch.fetchItems();
    const jsonData = req.body; 
    const reqData = JSON.stringify(req.body.todoItem);
    //console.log(jsonData);

    for (let key in jsonData) {
        const newToDoItem = new ToDoItem(jsonData[key].toString());
        newToDoItem.save();
    }
    
    res.status(201);
    res.redirect('/');
  };
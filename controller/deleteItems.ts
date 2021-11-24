import { Request, Response, NextFunction } from "express";
import * as path from 'path';
import * as fs from 'fs';

import { ToDoItem } from '../model/todo';

export const deleteItems = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const fetch = new ToDoItem('..');
        
        const jsonData = req.body; 
        const reqData = JSON.stringify(req.body.todoItem);

        const products : Array<ToDoItem> = [];
        const p = path.join(__dirname, '..', 'data', 'todos.json');
        fs.writeFile(p, JSON.stringify(products, null, 2), err => {
            console.log(err);
        });  

        for (let key in jsonData) {
            const newToDoItem = new ToDoItem(jsonData[key]);
            saveItems(newToDoItem);
        }
        res.status(200);
        res.redirect('/');

    } catch (err) {
        console.log('error: ' + err);  
    }
  };


  async function saveItems(item: ToDoItem) {
      await item.save();
  }
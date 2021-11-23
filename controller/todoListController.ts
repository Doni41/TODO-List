import * as path from 'path';
import * as fs from 'fs';

import { Request, Response, NextFunction } from "express";

import { ToDoItem } from '../model/todo';


export const getDatabase = async (req: Request, res: Response, next: NextFunction) => {
    const p = path.join(__dirname, '..', 'data', 'todos.json');
    let products: Array<ToDoItem> = [];
    let data;
    try {
            const data = await fs.promises.readFile(p, 'utf-8');
            await res.setHeader('Content-Type', 'application/json');
            await res.send(data);        
            return data;
    } catch(err) {
        console.log(err);
    }    
};

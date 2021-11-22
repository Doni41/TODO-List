import { ToDoItem } from "./todo";
import * as fs from 'fs';
import * as path from 'path';

export class ToDoList<Item> {
    private static instance: ToDoList<ToDoItem>;
    todoList: Array<Item>;

    private constructor () {
        this.todoList = new Array<Item>();
    }

    public static getInstance() {
        if (!this.instance) {
            ToDoList.instance = new ToDoList<ToDoItem>();
        }
        return ToDoList.instance;
    }

    public getItems() {
        return this.todoList;
    }

    public static addItem() {
        
    }

    public static async fetchAll() {
        const p = path.join(
            path.dirname(__dirname),
            '..',
            'data',
            'todos.json'
          );
        try {
            const fileContent = await fs.readFile(p, (err, fileContent) => {
                if (err) {
                    throw new Error('Cannot open todos.json');
                }
                return Buffer.from(fileContent);
            });

            console.log(fileContent);
            
        } catch (error) {
            console.log(error);  
        };        
    }
}
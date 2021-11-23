import { builtinModules } from "module";
import * as path from 'path';
import * as fs from 'fs';
import { ToDoList } from "./todoList";

export class ToDoItem {
    id: Date;
    title: String;
    isActive: Boolean;

    constructor(title: string) {
        this.id = new Date();
        this.title = title.slice(1, title.length - 1);
        this.isActive = true;
    }

    public async readData (p: string ,isTrue: Boolean, products: Array<ToDoItem>) {
        await fs.readFile(p, (err, fileContent) => {
            try {                
                if (!err) {
                    if(fileContent.toString()) {                        
                        products = JSON.parse(fileContent.toString());
                    }
                } else {
                    throw new Error('Bad file path!');
                }
                if (isTrue) {
                    products.push(this);      
                } else {
                    products = [];
                }
                fs.writeFile(p, JSON.stringify(products), err => {
                    console.log(err);
                  });          
            } catch (err) {
                console.log(err);
            }
        });
    }  
    
    public async save() {
        const p = path.join(__dirname, '..', 'data', 'todos.json');
        let products: Array<ToDoItem> = [];
        this.readData(p, true, products);
    }

    public async fetchItems() {
        const p = path.join(__dirname, '..', 'data', 'todos.json');
        let products: Array<ToDoItem> = [];
        this.readData(p, false, products);
    }

}

//module.exports = ToDoItem;
import { builtinModules } from "module";
import * as path from 'path';
import * as fs from 'fs';
import { ToDoList } from "./todoList";

export class ToDoItem {
    id: Date;
    done: Boolean;
    text: String;

    constructor(title: string) {
        this.id = new Date();
        this.done = false;
        this.text = title.slice(1, title.length - 1);
    }

    public async readData (p: string ,isTrue: Boolean, products: Array<ToDoItem>) {
        fs.readFile(p, (err, fileContent) => {
            try {                
                if (!err) {
                    if(fileContent.toString() && isTrue) {                        
                        //products = JSON.parse(fileContent.toString());
                        products = [ ...JSON.parse(fileContent.toString()) ];
                    }
                } else {
                    throw new Error('Bad file path!');
                }
                if (isTrue) {
                    products.push(this);      
                } else {
                    console.log('bejovok ide, ugye?');
                    products = [];
                }
                fs.writeFile(p, JSON.stringify(products, null, 2), err => {
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
        await this.readData(p, true, products);
    }

    public async fetchItems() {
        const p = path.join(__dirname, '..', 'data', 'todos.json');
        let products: Array<ToDoItem> = [];
        await this.readData(p, false, products);
    }

    public async getDB () {
        const p = path.join(__dirname, '..', 'data', 'todos.json');
        let products: Array<ToDoItem> = [];
        fs.readFile(p, (err, fileContent) => {
            try {                
                if (!err) {
                    if(fileContent.toString()) {                        
                        products = JSON.parse(fileContent.toString());
                    }
                    products.forEach((e) => console.log('e:' + e));
                } else {
                    throw new Error('Bad file path!');
                }
             } catch (err) {
                 console.log('error: ' + err);
                 
             }
        });
    }

}

//module.exports = ToDoItem;
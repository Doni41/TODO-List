import { builtinModules } from "module";
import * as path from 'path';
import * as fs from 'fs';

export class ToDoItem {
    id: Date;
    title: String;
    isActive: Boolean;

    constructor(title: string) {
        this.id = new Date();
        this.title = title;
        this.isActive = true;
    }

    public async save() {
        const p = path.join(__dirname, '..', 'data', 'todos.json');
        let products: Array<ToDoItem> = [];
        await fs.readFile(p, (err, fileContent) => {
            try {                
                if (!err) {
                    if(fileContent.toString()) {                        
                        products = JSON.parse(fileContent.toString());
                    }
                } else {
                    throw new Error('Bad file path!');
                }
                products.push(this);      
                fs.writeFile(p, JSON.stringify(products), err => {
                    console.log(err);
                  });          
            } catch (err) {
                console.log(err);
            }
        });
    }
}

//module.exports = ToDoItem;
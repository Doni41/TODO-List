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
}

//module.exports = ToDoItem;
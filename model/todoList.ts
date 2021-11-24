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
}
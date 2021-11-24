import * as express from 'express';
import * as path from 'path';
import * as fs from 'fs';

import { postAddItem } from '../controller/todoController';
import { getDatabase } from '../controller/todoListController';
import { deleteItems } from '../controller/deleteItems';


const router = express.Router();

export const getIndexPage =  router.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'index.html'));
});

export const postIndexPage = router.post('/', postAddItem);

export const getData = router.get('/get-data', getDatabase);

export const deleteData = router.use('/delete-items', deleteItems);

module.exports = router;


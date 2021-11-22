import * as express from 'express';
import * as path from 'path';
import * as fs from 'fs';

import { postAddProduct } from '../controller/todoController';


const router = express.Router();

export const getIndexPage =  router.get('/', async (req, res) => {
    await res.sendFile(path.join(__dirname, '..', 'view', 'index.html'));
});

export const postIndexPage = router.post('', postAddProduct);

module.exports = router;


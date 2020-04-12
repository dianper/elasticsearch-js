import express from 'express';
import BookController from './controller';
import { Client } from 'elasticsearch';

const client = new Client({ node: 'http://localhost:9200' });
const router = express.Router();
const controller = new BookController(client);

router.delete('/books/:bookId', controller.delete);
router.get('/books', controller.getAll);
router.get('/books/:bookId', controller.getById);
router.post('/books', controller.create);
router.put('/books/:bookId', controller.update);

export default router;

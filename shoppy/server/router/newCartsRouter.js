import express from 'express';
import * as cartsController from '../controller/cartsController.js'

const router = express.Router();

router
.post('/', cartsController.insertCart)

export default router;
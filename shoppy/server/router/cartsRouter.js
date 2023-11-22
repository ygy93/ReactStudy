import express from 'express';
import * as cartsController from '../controller/cartsController.js'

const router = express.Router();

router
.get('/:id', cartsController.getCartList)

export default router;
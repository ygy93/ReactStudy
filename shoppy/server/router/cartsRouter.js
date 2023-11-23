import express from 'express';
import * as cartsController from '../controller/cartsController.js'

const router = express.Router();

router
.get('/:id', cartsController.getCartList)
.delete('/:id/:cid', cartsController.removeCartList)

export default router;
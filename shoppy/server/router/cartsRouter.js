import express from 'express';
import * as cartsController from '../controller/cartsController.js'

const router = express.Router();

router
.get('/:id', cartsController.getCartList)
.get('/:id/:startIndex/:endIndex', cartsController.getPageList)
.put('/:id/:cid/:checkFlag', cartsController.updateQty)
.delete('/:id/:cid', cartsController.removeCartList)


export default router;
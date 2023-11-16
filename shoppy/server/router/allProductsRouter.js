import express from 'express';
import * as productsController from '../controller/productsController.js'

const router = express.Router();

router.get('/', productsController.getAllProducts)
router.get('/:pid', productsController.getProduct)

export default router;
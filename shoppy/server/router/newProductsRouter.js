import express from 'express';
import * as productsController from '../controller/productsController.js'

const router = express.Router();

router.post('/', productsController.insertProduct)

export default router;
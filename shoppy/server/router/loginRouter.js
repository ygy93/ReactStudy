import express from 'express';
import * as memberController from '../controller/memberController.js'

const router = express.Router();

router.post('/', memberController.getLogin)

export default router;
import express from 'express';
import * as uploadController from '../controller/uploadController.js'

const router = express.Router();

router
.post('/', uploadController.upload)

export default router;
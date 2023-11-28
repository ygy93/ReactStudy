import express from "express";
import newProductsRouter from "./router/newProductsRouter.js";
import allProductsRouter from './router/allProductsRouter.js';
import signRouter from './router/signRouter.js';
import loginRouter from './router/loginRouter.js';
import newCartsRouter from './router/newCartsRouter.js';
import cartsRouter from './router/cartsRouter.js';
import orderRouter from './router/orderRouter.js';
import uploadRouter from './router/uploadRouter.js';
import path from 'path';
import cors from 'cors';

const server = express();
const PORT = 8000;

server.use(express.json());
server.use(express.urlencoded());
server.use(express.urlencoded({ extended: true }))
server.use(cors());
server.use('/uploads', express.static(path.join('uploads'))) // 업로드는 따로 업로드 폴더를 만들어 관리, 업로드파일들을 따로 올리는 경로도 설정

server.use('/products', allProductsRouter) // products/:id 형식의 파라미터도 함께 처리
server.use('/products/new', newProductsRouter)

server.use('/sign', signRouter)
server.use('/login', loginRouter)

server.use('/carts/new', newCartsRouter)
server.use('/carts', cartsRouter)

server.use('/order/new', orderRouter)

server.use('/upload', uploadRouter)

server.listen(PORT, () => {
  console.log(`server running --> ${PORT}`);
});
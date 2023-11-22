import express from "express";
import newProductsRouter from "./router/newProductsRouter.js";
import allProductsRouter from './router/allProductsRouter.js';
import signRouter from './router/signRouter.js';
import loginRouter from './router/loginRouter.js';
import newCartsRouter from './router/newCartsRouter.js';
import cartsRouter from './router/cartsRouter.js';
import cors from 'cors';

const server = express();
const PORT = 8000;

server.use(express.json());
server.use(express.urlencoded());
server.use(cors());

server.use('/products', allProductsRouter) // products/:id 형식의 파라미터도 함께 처리
server.use('/products/new', newProductsRouter)
server.use('/sign', signRouter)
server.use('/login', loginRouter)

server.use('/carts/new', newCartsRouter)
server.use('/carts', cartsRouter)

server.listen(PORT, () => {
  console.log(`server running --> ${PORT}`);
});
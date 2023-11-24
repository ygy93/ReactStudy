import * as orderRepository from '../repository/orderRepository.js';

export async function insertOrderList(req, res) {
  const newOrderList = req.body;
  // console.log(newOrderList);
  const result = await orderRepository.insertOrderList(newOrderList);
  res.json(result);
}


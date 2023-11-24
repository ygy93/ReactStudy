import * as cartsRepository from '../repository/cartsRepository.js';

export async function insertCart(req, res) {
  const { id, pid, size, qty } = req.body;
  const result = await cartsRepository.insertCart({ id, pid, size, qty });
  res.json(result);
}

export async function getCartList(req, res) {
  const { id } = req.params;
  const result = await cartsRepository.getCartList({id});
  res.json(result);
}

export async function removeCartList(req, res){
  const { cid } = req.params;
  const result = await cartsRepository.removeCartList({cid});
  res.json(result);
}

export async function updateQty(req, res){
  const { id, cid, checkFlag } = req.params;

  // console.log(JSON.stringify({id, cid, checkFlag}));

  const result = await cartsRepository.updateQty({id, cid, checkFlag});
  res.json(result);
}
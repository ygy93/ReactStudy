import * as cartsRepository from '../repository/cartsRepository.js';

export async function insertCart(req, res) {
  const { id, pid, size } = req.body;
  const result = await cartsRepository.insertCart({ id, pid, size });
  res.json(result);
}
import * as productsRepository from '../repository/productsRepository.js';

export async function insertProduct(req, res) {
  const { image, name, price, info } = req.body;
  const result = await productsRepository.insertProduct({ image, name, price, info });
  // console.log(`---> ${result}`);
  res.json(result);
}
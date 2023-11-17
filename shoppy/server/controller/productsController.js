import * as productsRepository from '../repository/productsRepository.js';

export async function insertProduct(req, res) {
  const { image, name, price, info } = req.body;
  const result = await productsRepository.insertProduct({ image, name, price, info });
  res.json(result);
}

export async function getAllProducts(req, res){
  const result = await productsRepository.getProductList();

  res.json(result);
}


export async function getProduct(req, res){
  const pid = req.params.pid;
  const result = await productsRepository.getProduct(pid);

  res.json(result);
}
import * as cartsRepository from '../repository/cartsRepository.js';

/* 장바구니 리스트 추가 */
export async function insertCart(req, res) {
  const { id, pid, size, qty } = req.body;
  const result = await cartsRepository.insertCart({ id, pid, size, qty });
  res.json(result);
}

/* 장바구니 리스트 */
export async function getCartList(req, res) {
  const { id } = req.params;
  const result = await cartsRepository.getCartList({id});
  res.json(result);
}

/* 장바구니 리스트 삭제 */
export async function removeCartList(req, res){
  const { cid } = req.params;
  const result = await cartsRepository.removeCartList({cid});
  res.json(result);
}

/* 장바구니 리스트 수정 */
export async function updateQty(req, res){
  const { id, cid, checkFlag } = req.params;

  // console.log(JSON.stringify({id, cid, checkFlag}));

  const result = await cartsRepository.updateQty({id, cid, checkFlag});
  res.json(result);
}

/* 장바구니 리스트 페이징처리 */
export async function getPageList(req, res){
  const { id, startIndex, endIndex } = req.params;
  const result = await cartsRepository.getPageList({ id, startIndex, endIndex });
  res.json(result);
}
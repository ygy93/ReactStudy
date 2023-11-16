import { db } from '../db/database.js';

export async function insertProduct({ image, name, price, info }) {
  const sql = 'insert into shoppy_products(name, image, price, info, pdate) values(?, ?, ?, ?, curdate())';

  return db
  .execute(sql,[ name, image, price, info ])
  .then(result => 'good')
}

export async function getProductList(){
  return db
  .execute('select pid, name, image, price, info, pdate from shoppy_products')
  .then(result => result[0])
}

export async function getProduct(pid){
  return db
  .execute('select pid, name, image, price, info, pdate from shoppy_products where pid = ?', [pid])
  .then(result => result[0][0])
}
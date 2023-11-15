import { db } from '../db/database.js';

export async function insertProduct({ image, name, price, info }) {
  const sql = 'insert into shoppy_products(name, image, price, info, pdate) values(?, ?, ?, ?, curdate())';

  return db
  .execute(sql,[ name, image, price, info ])
  .then(result => 'good')
}
import { db } from '../db/database.js';

export async function insertCart({ id, pid, size }) {

  return db
  .execute('insert into shoppy_cart(qty, size, id, pid, cdate) values(1, ?, ?, ?, sysdate())', [ size, id, pid ])
  .then((result) => 'good')
}
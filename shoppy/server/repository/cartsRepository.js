import { db } from '../db/database.js';

export async function insertCart({ id, pid, size, qty }) {

  return db
  .execute('insert into shoppy_cart(qty, size, id, pid, cdate) values(?, ?, ?, ?, sysdate())', [ qty, size, id, pid ])
  .then((result) => 'good')
}

export async function getCartList({ id }){
  return db
  .execute(`
    select row_number() over(order by qty) as rno, sp.image, sp.name, sp.price, sc.qty, sc.size, sp.price*sc.qty as tprice, sp.pid, sm.id, sc.cid
    from shoppy_member sm, shoppy_products sp, shoppy_cart sc
    where sm.id = sc.id 
    and sp.pid = sc.pid
    and sc.id = ?`, [id])
  .then((rows) => rows[0])
}

export async function removeCartList({ cid }){
  const sql = `delete from shoppy_cart where cid = ?`;

  return db
  .execute(sql, [cid])
  .then((result) => 'good')
}
import { db } from '../db/database.js';

export async function insertOrderList(newOrderList) {
  newOrderList.map((order) => {
    const sql = `insert into shoppy_order(id, pid, size, qty, totprice, odate) values(?, ?, ?, ?, ?, sysdate())`;

    db
    .execute(sql, [ order.id, order.pid, order.size, order.qty, order.totPrice ]) /* 자바스크립트에서는 대소문자 구분이 확실하다 */
    .then()
  })

  return 'good';
}
import { db } from '../db/database.js';

export async function insertMember({ name, id, pass, phone }) {
  const sql = 'insert into shoppy_member(name, id, pass, phone, mdate) values(?, ?, ?, ?, sysdate())';

  return db
  .execute(sql,[ name, id, pass, phone ])
  .then((result) => 'good')
}

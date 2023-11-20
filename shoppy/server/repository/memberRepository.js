import { db } from '../db/database.js';

export async function insertMember({ name, id, hashPass, phone }) {
  const sql = 'insert into shoppy_member(name, id, pass, phone, mdate) values(?, ?, ?, ?, sysdate())';

  return db
  .execute(sql,[ name, id, hashPass, phone ])
  .then((result) => 'good')
}

/* 로그인의 경우 쿼리에 count 를 활용하여 0, 1 으로하여 데이터가 있으면 1 로 시작, 없는 데이터면 0 으로 시작 */
export async function getLogin(id){
  return db
  .execute('select count(pass) as count, ANY_VALUE(pass) as pass from shoppy_member where id = ?',[id])
  .then((rows) => rows[0][0]) // [0][0] 은 한줄만 가져오기 때문, 이것이 생략되면 배열로되므로 object : Object 로 뜸
}

export async function getIdCheck(id){
  return db
  .execute('select count(id) as count from shoppy_member where id = ?', [id])
  .then((rows) => rows[0][0])
}
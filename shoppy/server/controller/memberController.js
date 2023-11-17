import * as memberRepository from '../repository/memberRepository.js';
import bcrypt from 'bcrypt';

export async function insertMember(req, res) {
  const { name, id, pass, phone } = req.body;
  const hashPass = bcrypt.hashSync(pass, 10);
  const result = await memberRepository.insertMember({ name, id, hashPass, phone });
  // console.log(result);
  res.json(result);
}

export async function getLogin(req, res) {
  const {id, pass} = req.body;
  const result = await memberRepository.getLogin(id);
  console.log(result);
  if(result.count === 1){
    // 비밀번호 체크
    // const presult = await bcrypt.compare(pass, result.pass);
    // console.log(presult);
    if(await bcrypt.compare(pass, result.pass)){
      result.login_result = true;
    } else {
      result.login_result = false;
    }
  } else {
    result.login_result = false;
  }
  console.log(result);
  res.json(result);
}
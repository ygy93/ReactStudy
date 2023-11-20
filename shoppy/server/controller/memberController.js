import * as memberRepository from '../repository/memberRepository.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export async function insertMember(req, res) {
  const { name, id, pass, phone } = req.body;
  const hashPass = bcrypt.hashSync(pass, 10);
  const result = await memberRepository.insertMember({ name, id, hashPass, phone });
  // console.log(result);
  res.json(result);
}

export async function getIdCheck(req, res) {
  const id = req.params.id;
  const result = await memberRepository.getIdCheck(id);

  res.json(result); // {data : { count : 1 }}
}


export async function getLogin(req, res) {
  const {id, pass} = req.body;
  const result = await memberRepository.getLogin(id);
  
  result.login_result = false;

  let token = null; // 바뀌는 변수이기에 let 으로 줌

  // console.log(result);

  if(result.count === 1){
    // 비밀번호 체크
    // const presult = await bcrypt.compare(pass, result.pass);
    // console.log(presult);

    if(await bcrypt.compare(pass, result.pass)){
      result.login_result = true; // 로그인 성공
      // jwt 토큰 생성
      token = jwt.sign({id : id}, '0Ra49X^k6PJ<');
      result.token = token;
      // console.log(`token --> ${token}`);

  //   } else {
  //     result.login_result = false;
  //   }
  // } else {
  //   result.login_result = false;
    }
  }
  // console.log(result);
  res.json(result); // 토큰 전송
}
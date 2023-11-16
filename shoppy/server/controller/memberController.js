import * as memberRepository from '../repository/memberRepository.js';

export async function insertMember(req, res) {
  const { name, id, pass, phone } = req.body;
  const result = await memberRepository.insertMember({ name, id, pass, phone });
  console.log(`---> ${result}`);
  res.json(result);
}
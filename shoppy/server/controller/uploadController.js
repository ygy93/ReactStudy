// import * as uploadRepository from '../repository/uploadRepository.js';
import multer from "multer";

// db 에 저장하는 것이 아닌 폴더에 저장하는 것이므로 db 연결을 해주는 Repository 는 필요가 없음


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // 경로문제로 앞에 / 를 주지않는게 좋을것, 폴더를 만드는 것
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    // cb(null, file.fieldname + '_' + uniqueSuffix)
    cb(null, uniqueSuffix + '_' + file.originalname)
  }
})
const fupload = multer({ storage: storage }).single('file')



/**
  파일 업로드 : 파일을 '/upload' 폴더에 저장하는 작업

  '스태틱' 이라는 폴더로 관리해줌
*/
export function upload(req, res) { // db 연동을 안하기 때문에 async 를 넣어줄 필요가없음 ( async 는 promise 형식을 사용할 때 써줘야하는것)
  fupload(req, res, err => {
    
    if(err){
      console.log(err);
    } else {
      console.log(JSON.stringify(res.req.file.path)); // res.req.file.path
      res.json(res.req.file.path);
    }
  })
}
import React, { useState } from "react";
import axios from 'axios';
import ImageUpload from "../components/ImageUpload";
import { getUser } from './../util/localStorage';

export default function NewProduct(){
  const userInfo = getUser();

  const [form, setForm] = useState({image : "", name : "", price : "", info : ""});
  const [image,setImage] = useState(null); // ImageUpload 컴포넌트 파라미터값 연결

  // ImageUpload 선택 이미지 경로 가져오기
  const getImage = (e) => {
    // alert(`new file --> ${JSON.stringify(e)}`)

    setImage(e);
  }

  const handleChange = (e) => {
    const { name, value } = e.target; // 정보를 입력할때마다 값이 초기화가 됨
    setForm({...form, [name] : value}); // 스프레드 연산자를 통해서 나눠주어 정보를 입력할때마다 차곡차곡 쌓이도록 바꿔줌
    // name 을 배열로 감싸주는것은 name 은 아래의 input 의 name 값들이기때문에 스프레드로 여러개로 나누고 배열로 합쳐주는것
    // console.log(form);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // FormData 를 이용하여 name, value 를얻어올 수 있음
    for(let pair of formData.entries()){
      console.log(`${pair[0]} : ${pair[1]}`);
    }


    
    const formData = new FormData(e.target);

    // 또는 FormData 를 직접 객체로 변환할 수도 있음
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    })
    // console.log('FormData as object : ', formDataObject);

    // alert(JSON.stringify(form));
    // console.log(form);

    // post --> axios 
      axios({
        method : 'post',
        url : `http://localhost:8000/products/new`,
        data : formDataObject,
      })
      .then(result => {
        if(result.data === 'good'){
          alert('새로운 제품이 등록되었습니다');
        }

        console.log('요청성공');
        console.log(result.data);
      })
      .catch(err => {
        console.log('요청실패');
        console.log(err)
      })
  }

  return(
    <div className="NewProduct">
      <p className="font_title">
        New Products
      </p>
      <form className="new_product" onSubmit={handleSubmit}>
        <ul>{/* onChange 는 지정된 태그의 밸류값이 바뀌었을때 실행되는것 */}
          <li>
            <input type="hidden" name="image" placeholder="image" value={image}/>
            <ImageUpload getImage={getImage} />
            {
              (image != null) ?
              <img src={`http://localhost:8000/${image}`} alt="" style={{width : 100}} />
              : null
            }
          </li>
          <li><input type="text" name="name" placeholder="name" /></li> {/* onChange={handleChange} value={form.name} */}
          <li><input type="text" name="price" placeholder="price"/></li>
          <li><input type="text" name="info" placeholder="info"/></li>
        </ul>
        <button className="new_product_button">제품 등록하기</button>
      </form>
    </div>
  );
}
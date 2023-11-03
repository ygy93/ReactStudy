import { useEffect, useState } from "react";

export default function Products() { // const [실행되는 값, 적용되는 이벤트 메소드] , useState(초기값)
  const [products, setProducts] = useState([]); // 배열형태의 데이터이므로 [], 객체데이터면 {}
  const [checked, setChecked] = useState(false); // 체크박스 이벤트 상태 저장
  const handleChange = (event) => setChecked((sp) => !checked);

  // products.json --> fetch 사용
  // useEffect() - 최초의 한번만 fetch 실행
  useEffect(() => {
      fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data");
        setProducts(data);
      })
    }, [checked]);
  // 데이터 파일의 위치가 'src' 에 있어서 'public' 에 있는 index.html 의 첫번째 대괄호 태그가 먼저 읽혀서 못가져왔던 것으로
  // 데이터 파일의 위치를 'public' 폴더에 넣으면 문제 해결됨
  // 무한루프로 반복 중

  return(
    <div>
      <h1>show products!!</h1>
      <input type="checkbox" id="checkbox" onChange={handleChange}></input>
      <label htmlFor="checkbox">Show Only Sale!!</label>

      <ul>
        { products.map((product) => ( 
          <li key={product.id}>{/* 콘솔에서 에러뜨는 건 부모 태그에 고유의 키값이 없어서 나오는 것으로 따로 key 값을 부여함 */}
            <p>name : {product.name}</p>
            <p>price : {product.price}</p>
            <p>id : {product.id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
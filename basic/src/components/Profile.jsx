import Avata from "./Avata";

// 값이 4개 이하일때는 ({image, name, title}) 식으로 넣는것도 좋음
export default function Profile({image, name, title, isNew}) { // 리액트에선 () 안에 매개변수, 파라미터가 프로퍼티스로 값을 의미한다
  return (
    <div className="profile">
      <Avata image = {image} isNew = {isNew} />
      <h1>James Kim{name}</h1>
      <p>프론트엔드 개발자{title}</p>
    </div>
  );
}

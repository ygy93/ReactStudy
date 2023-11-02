import React from "react";

export default function MenuType(){
  const TypeList = ['종합','실시간','일별','월별/주별','특가','스테디셀러']
  const MenuHandler = (event) => {
    alert('ddd');
    // TypeList.map((TypeName) => { alert(TypeName); })
  }

  return(
    <div className="MenuType">
      <ul>
        {
          TypeList.map(TypeName => {
            return <li onClick={MenuHandler}>{TypeName}</li> // MenuHandler() 뒤에 소괄호를 넣으면 해당 변수가 계속 실행되므로 넣지않는다
          })
        }
      </ul>
    </div>
  );
}




{/* 
return(
  <>
    {
      list.map(v => {
        <div>{v}</div>
      })
    }
  </> 
)
*/}
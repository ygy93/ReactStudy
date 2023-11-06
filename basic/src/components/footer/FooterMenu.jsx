import React from "react";

export default function FooterMenu(){
  const MenuList = ['회사소개','채용안내','가맹점 개설문의','상품입점 및 제휴문의','사이버 감사실','고객센터'];

  return(
    <div className="FooterMenu">
      <ul className="Menu">
        {
          MenuList.map(list => 
            <li key={list}>{list}</li>
          )
        }
      </ul>

      <select className="siteweb" label="CJ그룹계열사">
      <option className="">CJ그룹계열사</option>
        <optgroup label="식품 & 식품서비스">
          <option>CJ제일제당</option>
          <option>CJ푸드빌</option>
          <option>CJ프레시웨이</option>
        </optgroup>
      </select>
    </div>
  );
}
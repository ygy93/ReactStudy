import React from "react";

export default function BookContents(book){
  return(
    <div className="BookContents">
      <p>{book.top_tag}</p>
      <p><span>[{book.kind}]</span> <span>{book.title}</span> <span>{book.comment}</span> [ 초판한정 저자 인쇄 사인본 + 핸디북 증정은 종료되었습니다. ]</p>
      <p><span>{book.author} 저</span> <span>{book.company}</span> <span>{book.pdate}</span></p>
      <p><span>{book.price}</span> 포인트 <span>{book.point}</span></p>
      <p>판매지수 <span>{book.sale_index}</span> 회원리뷰(<span>{book.review}</span>) 리뷰 총점10.0</p>
      <p><span>11/8(수)</span> 도착예정</p>
      <p><span>{book.goods}</span> : 2024 캘린더& 다이어리</p>
    </div>
  );
}

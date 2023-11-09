import React, { useEffect, useState } from "react";
import BookAvata from './BookAvata';
import BookBuy from './BookBuy';
import BookContents from './BookContents';
import BookList from './BookList';

export default function Book({filename}){
  const [bookList, setBookList] = useState([]); // 전역변수로 써넣어야 하므로
  useEffect(() => {
    fetch(`data/${filename}best_book.json`) // 패치로 가져오면 스트링인 문자열로 넘어옴
    .then(res => res.json()) // 그러므로 제이슨 객체로 다시 바꿔준다
    .then(data => {
      setBookList(data);
      // console.log(data); // 콘솔이 2번 찍히는 이유는 StrictMode 로 한번 검수검열하는 작업을 하면서 1번 더 찍혀보이는것, 문제는없음
    })
  }, [])


  return(
    <ul>
      {
        bookList.map((book) => 
          <BookList>
            <BookAvata
              number={book.number}
              image={book.image}
            />
            <BookContents 
              top_tag = {book.top_tag}
              kind = {book.kind}
              title = {book.title}
              comment = {book.comment}
              author = {book.author}
              company = {book.company}
              pdate = {book.pdate}
              price = {book.price}
              point = {book.point}
              sale_index = {book.sale_index}
              review = {book.review}
              de_date = {book.de_date}
              goods = {book.goods}
            />
            <BookBuy />
          </BookList>
        )
      }
    </ul>
  );
}

import React from "react";

export default function BookList({children}){
  return(
    <li className="booklist">
      {children}
    </li>
  );
}
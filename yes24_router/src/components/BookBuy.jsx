import React from "react";
import Quantity from "./Quantity";
import ButtonCart from "./ButtonCart";
import ButtonBuy from './ButtonBuy';
import ButtonList from './ButtonList';
import Button from './Button';

export default function BookBuy(){
  return(
    <div className="BookBuy">
      <Quantity />
      <Button className="button_cart" buttonName="카트에 넣기" />
      <Button className="button_buy" buttonName="바로 구매" />
      <Button className="button_list" buttonName="리스트에 넣기" />
    </div>
  );
}
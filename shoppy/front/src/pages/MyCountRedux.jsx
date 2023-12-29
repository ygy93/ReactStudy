import React, { useReducer, useState } from "react";
import CountContainer from "../containers_redux/CountContainer";

export default function MyCountRedux(){

  return(
    <>
      <h1>Redux</h1>
      <CountContainer />
    </>
  );
}
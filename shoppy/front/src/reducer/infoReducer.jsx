import React from "react";

export default function infoReducer(state, action){
  if(action.type === 'age'){
    return {age : state.age + 1};
  }
}
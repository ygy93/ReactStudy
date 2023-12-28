import React from "react";

export default function countReducer(count, action){
  if(action.type === 'plus'){
    return count + action.number;
  } else if(action.type === 'minus'){
    return count - action.number;
  } else if(action.type === 'reset'){
    return 0;
  }
}
const init = {
  qtyUpdateFlag: false
};

export default function reduxQtyUpdate(state=init, action){
  switch(action.type){
    case 'UPDATE_SUCCESS':
      return {
        qtyUpdateFlag: action.qtyUpdateFlag
      }
    default :
      return {
        qtyUpdateFlag: false
      }
  }

}
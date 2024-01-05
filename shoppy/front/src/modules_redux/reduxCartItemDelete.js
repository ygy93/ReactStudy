const init = {
  deleteFlag: false
}

export default function reduxCartItemDelete(state=init, action){
  switch(action.type){
    case 'DELETE_SUCCESS':
      return {
        deleteFlag: action.deleteFlag
      }
    default:
      return {
        deleteFlag: false
      }
  }

}
import axios from "axios";
import { useEffect } from "react";

export default function useCartDeleteItem(buttonRef, userInfo, cid){

  useEffect(() => {
    const handleDelete = async(e) => {
      // const cid = e.target.dataset.id;
      const confirmResult = window.confirm('정말로 삭제하시겠습니까?'); // boolean 값으로 true, false 로 나타남

      if(confirmResult){
        try {
          await axios
          .delete(`http://localhost:8000/carts/${userInfo.id}/${cid}`)
          .then(data => {
            // console.log(data.data)
            window.location.reload();
          })
          .catch(err => console.log(err))
        } catch (error) {}
      }
    }

    // buttonRef 클릭이벤트 추가
    if(buttonRef && buttonRef.current){
      buttonRef.current.addEventListener('click', handleDelete);
    }
  }, [buttonRef])

}
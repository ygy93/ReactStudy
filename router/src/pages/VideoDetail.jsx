import React from "react";
import { useParams } from "react-router-dom";

export default function VideoDetail(){
  const { videoId } = useParams(); // Video 의 폼에서 name 값을 videoId 로 줬기 때문에 이를 객체로 구조분해
  // console.log(videoId);

  return(
    <>
      <div>디테일한 비디오</div>
      <div>Video Id : {videoId}</div>
    </>
  );
}
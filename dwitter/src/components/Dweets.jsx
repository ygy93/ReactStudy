

export default function Dweets(props) {
  return(
    <div className="Dweets">
      <div className="image">
        <img src = {props.image} className="img" alt="" />
      </div>

      <div className="title">
        <div className="profile">
          <span>{props.name} </span>
          <span>@{props.id}</span>
          <span>{props.date}</span>
        </div>
        
        <div className="updet">
          <span>편집</span>
          <span>삭제</span>
        </div>
      </div>
      
      <div className="content">
        {props.content} 
      </div>
    </div>
  );
}
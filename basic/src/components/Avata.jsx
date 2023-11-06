

export default function Avata({image, isNew}){
  return(
    <div className="Avata">
      <img src={image} className="img" alt="" />
      { isNew && <span className="new">NEW</span> }
    </div>
  );
}
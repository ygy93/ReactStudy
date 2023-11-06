export default function ProductView({image, brand, title, price}) {
  return(
    <div className="view">
      <article>
        <img src={image} alt="" />
        <p>{brand}</p>
        <p>{title}</p>
        <p>{price}</p>
      </article>
    </div>
  );
}
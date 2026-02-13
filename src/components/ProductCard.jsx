import "./ProductCard.css";
function ProductCard({ name, price, image, inStock }) {
 return (
 <div className="card">
 <img src={image} alt={name} />
 <h2>{name}</h2>
 <p className="price">₹{price}</p>
 <span className={`stock ${inStock ? "in" : "out"}`}>
 {inStock ? "In Stock" : "Out of Stock"}
 </span>
 </div>
  );
}
export default ProductCard;

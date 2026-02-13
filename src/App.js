import ProductCard from "./components/productCard";
import "./index.css";
function App() {
  return (
    <div className="app-container">
    <h1 className="heading">Our Products</h1>
    <div className="card-wrapper">
    <ProductCard
      name="Wireless Headphones"
      price={2999}
      image="https://images.unsplash.com/photo-1585386959984-a41552262d43"
      inStock={true}
        />
      <ProductCard
      name="Smart Watch"
      price={4999}
      image="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b"
      inStock={false}
      />
    </div>
  </div>
  );
}
export default App;

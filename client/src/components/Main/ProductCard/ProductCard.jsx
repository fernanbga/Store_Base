//import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product, onSelect }) {
  const handleClick = () => {
    onSelect(product.id);
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <h3>{product.name}</h3>
      <p>Price: €{product.price}</p>
      <p>Relevance: {product.relevance}</p>
      <p>Manufacturer: {product.manufacturer_name}</p>
    </div>
  );
}

export default ProductCard;
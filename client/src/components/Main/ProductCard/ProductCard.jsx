import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="product-card" onClick={handleClick} style={{ cursor: "pointer" }}>
      <h3>{product.name}</h3>
      <p>Price: €{product.price}</p>
      <p>Relevance: {product.relevance}</p>
      <p>Manufacturer: {product.manufacturer_name}</p>
    </div>
  );
}

export default ProductCard;
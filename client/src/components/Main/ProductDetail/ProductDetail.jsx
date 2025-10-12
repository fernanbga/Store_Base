import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data || null));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p><strong>Price:</strong> €{product.price}</p>
      <p><strong>Relevance:</strong> {product.relevance}</p>
      <p><strong>Manufacturer:</strong> {product.manufacturer_name}</p>
      <p><strong>CIF:</strong> {product.manufacturer_cif}</p>
      <p><strong>Address:</strong> {product.manufacturer_address}</p>
      {/* En un futuro con imagen :v */}
    </div>
  );
}

export default ProductDetail;
import ProductCard from "../ProductCard/ProductCard";

function ProductList({ products, onSelectProduct }) {
  if (!products.length) {
    return <div className="product-list">No products found.</div>;
  }
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} onSelect={onSelectProduct} />
      ))}
    </div>
  );
}

export default ProductList;
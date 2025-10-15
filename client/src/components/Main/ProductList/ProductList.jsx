import ProductCard from "./ProductCard";

function ProductList({ products, onSelectProduct }) {
  if (!products?.length) {
    return <p role="status">No products found.</p>;
  }

  return (
    <ul className="product-list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {products.map((p) => (
        <li key={p.id}>
          <ProductCard product={p} onSelect={() => onSelectProduct(p.id)} />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
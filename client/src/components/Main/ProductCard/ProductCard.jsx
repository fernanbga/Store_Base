function ProductCard({ product, onSelect }) {
  const manufacturer =
    product?.manufacturer?.name ||
    product?.manufacturer_name ||
    product?.manufacturer ||
    "Unknown";

  return (
    <article className="product-card" aria-labelledby={`product-${product.id}-title`} onClick={onSelect} style={{ cursor: "pointer" }}>
      <header>
        <h4 id={`product-${product.id}-title`}>{product.name}</h4>
      </header>

      <p className="product-card__manufacturer">{manufacturer}</p>
      <p className="product-card__price">
        {typeof product.price === "number" ? `$${product.price.toFixed(2)}` : product.price}
      </p>

      <footer>
        <button type="button" className="product-card__action" onClick={onSelect}>
          View details
        </button>
      </footer>
    </article>
  );
}

export default ProductCard;
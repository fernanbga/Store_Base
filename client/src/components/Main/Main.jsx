import { useEffect, useState } from "react";
import ProductList from "./ProductList/ProductList";
import ProductDetailModal from "./ProductDetail/ProductDetailModal";

const API_URL = import.meta.env.VITE_API_URL;

function Main({ orderBy, orderDir, searchValue }) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const pageSize = 10;

  useEffect(() => {
    const query = searchValue.trim();
    fetch(
      `${API_URL}/api/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&orderDir=${orderDir}&search=${encodeURIComponent(query)}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setTotal(Number(data.total) || 0);
      })
      .catch(() => {
        setProducts([]);
        setTotal(0);
      });
  }, [orderBy, orderDir, page, pageSize, searchValue]);

  useEffect(() => {
    if (selectedProductId) {
      fetch(`${API_URL}/api/products/${selectedProductId}`)
        .then((res) => res.json())
        .then((data) => setSelectedProduct(data))
        .catch(() => setSelectedProduct(null));
    } else {
      setSelectedProduct(null);
    }
  }, [selectedProductId]);

  const handleNextPage = () => {
    if (page * pageSize < total) setPage((p) => p + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage((p) => p - 1);
  };

  return (
    <main aria-labelledby="page-title">
      <h2 id="page-title">Product List</h2>

      <section aria-labelledby="product-list-heading">
        <h3 id="product-list-heading" className="sr-only">Results</h3>
        <ProductList products={products} onSelectProduct={setSelectedProductId} />
      </section>

      <nav
        className="page-buttons"
        aria-label="Pagination"
        style={{ textAlign: "center", margin: "2rem 0", display: "flex", justifyContent: "center", gap: "1rem" }}
      >
        <ul style={{ display: "flex", listStyle: "none", gap: "1rem", padding: 0, margin: 0 }}>
          <li>
            <button
              className="pagination-btn"
              type="button"
              onClick={handlePrevPage}
              disabled={page === 1}
            >
              Previous page
            </button>
          </li>
          {page * pageSize < total && (
            <li>
              <button
                className="pagination-btn"
                type="button"
                onClick={handleNextPage}
              >
                Next page
              </button>
            </li>
          )}
        </ul>
      </nav>

      <p style={{ textAlign: "center", color: "#888" }} role="status" aria-live="polite">
        Page {page} of {Math.ceil(total / pageSize) || 1}
      </p>

      {selectedProduct && (
        <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </main>
  );
}

export default Main;
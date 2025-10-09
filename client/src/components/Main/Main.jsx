import { useEffect, useState } from "react";
import ProductList from "./ProductList/ProductList";
import ProductDetailModal from "./ProductDetail/ProductDetailModal";

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
      `http://localhost:3000/api/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&orderDir=${orderDir}&search=${encodeURIComponent(query)}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setTotal(Number(data.total) || 0);
      });
  }, [orderBy, orderDir, page, pageSize, searchValue]);

  useEffect(() => {
    if (selectedProductId) {
      fetch(`http://localhost:3000/api/products/${selectedProductId}`)
        .then(res => res.json())
        .then(data => setSelectedProduct(data));
    } else {
      setSelectedProduct(null);
    }
  }, [selectedProductId]);

  const handleNextPage = () => {
    if (page * pageSize < total) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <main>
      <h2>Product List</h2>
      <ProductList products={products} onSelectProduct={setSelectedProductId} />

      <div className="page-buttons" style={{ textAlign: "center", margin: "2rem 0", display: "flex", justifyContent: "center", gap: "1rem" }}>
        <button
          className="pagination-btn"
          onClick={handlePrevPage}
          disabled={page === 1}
        >
          Previous page
        </button>
        {page * pageSize < total && (
          <button
            className="pagination-btn"
            onClick={handleNextPage}
          >
            Next page
          </button>
        )}
      </div>
      <div style={{ textAlign: "center", color: "#888" }}>
        Page {page} of {Math.ceil(total / pageSize) || 1}
      </div>
      {selectedProduct && (
        <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </main>
  );
}

export default Main;
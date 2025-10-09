import { useEffect, useState } from "react";
import Header from "../Header/Header";
import ProductList from "./ProductList/ProductList";
import ProductDetail from "./ProductDetail/ProductDetail";

function Main() {
  const [products, setProducts] = useState([]);
  const [orderBy, setOrderBy] = useState("name");
  const [orderDir, setOrderDir] = useState("ASC");
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const pageSize = 10;
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSetOrder = (newOrderBy, newOrderDir) => {
    setOrderBy(newOrderBy);
    setOrderDir(newOrderDir);
    setPage(1); // Reset to first page when sorting changes
  };

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

  const handleCloseModal = () => setSelectedProduct(null);

  return (
    <main>
      <Header
        currentOrder={orderBy}
        currentDir={orderDir}
        setOrder={handleSetOrder}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <ProductList
        products={products}
        onProductClick={setSelectedProduct}
      />
      <div style={{ textAlign: "center", margin: "2rem 0", display: "flex", justifyContent: "center", gap: "1rem" }}>
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
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>×</button>
            <ProductDetail product={selectedProduct} />
          </div>
        </div>
      )}
    </main>
  );
}

export default Main;
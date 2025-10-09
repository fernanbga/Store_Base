import { useEffect, useState } from "react";
import Header from "../Header/Header";
import ProductList from "./ProductList/ProductList";

function Main() {
  const [products, setProducts] = useState([]);
  const [orderBy, setOrderBy] = useState("name");
  const [orderDir, setOrderDir] = useState("ASC");
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const pageSize = 10;

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

  return (
    <main>
      <Header
        currentOrder={orderBy}
        currentDir={orderDir}
        setOrder={handleSetOrder}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <h2>Product List</h2>
      <ProductList products={products} />
      <div style={{ textAlign: "center", margin: "2rem 0", display: "flex", justifyContent: "center", gap: "1rem" }}>
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          style={{
            padding: "0.7rem 2rem",
            fontSize: "1.1rem",
            borderRadius: "8px",
            border: "none",
            background: page === 1 ? "#eee" : "#ffe600",
            color: "#222",
            cursor: page === 1 ? "not-allowed" : "pointer",
            fontWeight: "bold",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
          }}
        >
          Previous page
        </button>
        {page * pageSize < total && (
          <button
            onClick={handleNextPage}
            style={{
              padding: "0.7rem 2rem",
              fontSize: "1.1rem",
              borderRadius: "8px",
              border: "none",
              background: "#ffe600",
              color: "#222",
              cursor: "pointer",
              fontWeight: "bold",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
            }}
          >
            Next page
          </button>
        )}
      </div>
      <div style={{ textAlign: "center", color: "#888" }}>
        Page {page} of {Math.ceil(total / pageSize) || 1}
      </div>
    </main>
  );
}

export default Main;
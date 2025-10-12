import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/styles.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import ProductDetail from "./components/Main/ProductDetail/ProductDetail";

function App() {
  const [orderBy, setOrderBy] = useState("name");
  const [orderDir, setOrderDir] = useState("ASC");
  const [searchValue, setSearchValue] = useState("");

  const handleSetOrder = (newOrderBy) => {
    setOrderBy(newOrderBy);
    setOrderDir(orderDir === "ASC" ? "DESC" : "ASC");
  };

  return (
    <>
      <Header
        currentOrder={orderBy}
        currentDir={orderDir}
        setOrder={handleSetOrder}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              orderBy={orderBy}
              orderDir={orderDir}
              searchValue={searchValue}
            />
          }
        />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
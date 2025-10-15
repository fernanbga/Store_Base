import OrderButton from "./OrderButton/OrderButton";

function Header({ currentOrder, currentDir, setOrder, searchValue, setSearchValue }) {
//Handle change para el imput
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <header className="header">
      <img src="../images/logoSB.png" alt="Store Base" className="header-logo" />

      <nav className="order-buttons" aria-label="Sort products">
        <ul style={{ display: "flex", gap: "0.5rem", listStyle: "none", padding: 0, margin: 0 }}>
          <li>
            <OrderButton
              label="Name"
              orderBy="name"
              currentOrder={currentOrder}
              currentDir={currentDir}
              setOrder={() => setOrder("name", currentDir === "ASC" ? "DESC" : "ASC")}
            />
          </li>
          <li>
            <OrderButton
              label="Price"
              orderBy="price"
              currentOrder={currentOrder}
              currentDir={currentDir}
              setOrder={() => setOrder("price", currentDir === "ASC" ? "DESC" : "ASC")}
            />
          </li>
          <li>
            <OrderButton
              label="Relevancy"
              orderBy="relevancy"
              currentOrder={currentOrder}
              currentDir={currentDir}
              setOrder={() => setOrder("relevancy", currentDir === "ASC" ? "DESC" : "ASC")}
            />
          </li>
        </ul>
      </nav>

      <form role="search" aria-label="Search products" onSubmit={(e) => e.preventDefault()}>
        <label
          htmlFor="product-search"
          style={{
            position: "absolute",
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            border: 0,
          }}
        >
          Search
        </label>
        <input
          id="product-search"
          type="search"
          className="search-input"
          placeholder="Search for a product or manufacturer..."
          value={searchValue}
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
}

export default Header;
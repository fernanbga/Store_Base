import OrderButton from "./OrderButton/OrderButton";

function Header({ currentOrder, currentDir, setOrder, searchValue, setSearchValue }) {
  // handleChange para el input
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <header className="header">
      <img src="../images/logoSB.png" alt="Store Base" className="header-logo" />
      <div className="order-buttons">
        <OrderButton label="Name" orderBy="name" currentOrder={currentOrder} currentDir={currentDir} setOrder={() => setOrder("name", currentDir === "ASC" ? "DESC" : "ASC")} />
        <OrderButton label="Price" orderBy="price" currentOrder={currentOrder} currentDir={currentDir} setOrder={() => setOrder("price", currentDir === "ASC" ? "DESC" : "ASC")} />
        <OrderButton label="Relevancy" orderBy="relevancy" currentOrder={currentOrder} currentDir={currentDir} setOrder={() => setOrder("relevancy", currentDir === "ASC" ? "DESC" : "ASC")} />
      </div>
      <input
        type="text"
        className="search-input"
        placeholder="Search for a product or manufacturer..."
        value={searchValue}
        onChange={handleInputChange}
      />
    </header>
  );
}

export default Header;
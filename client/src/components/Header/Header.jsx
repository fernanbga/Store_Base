import OrderButton from "./OrderButton/OrderButton";
//import "./Header.css";

function Header({ currentOrder, currentDir, setOrder, searchValue, setSearchValue }) {
  // handleChange para el input
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <header className="header">
      <h1>Store Base</h1>
      <div className="order-buttons">
        <OrderButton label="Name" orderBy="name" currentOrder={currentOrder} currentDir={currentDir} setOrder={() => setOrder("name", currentDir === "ASC" ? "DESC" : "ASC")} />
        <OrderButton label="Price" orderBy="price" currentOrder={currentOrder} currentDir={currentDir} setOrder={() => setOrder("price", currentDir === "ASC" ? "DESC" : "ASC")} />
        <OrderButton label="Relevancy" orderBy="relevancy" currentOrder={currentOrder} currentDir={currentDir} setOrder={() => setOrder("relevancy", currentDir === "ASC" ? "DESC" : "ASC")} />
      </div>
      <input
        type="text"
        className="search-input"
        placeholder="Buscar producto o fabricante..."
        value={searchValue}
        onChange={handleInputChange}
      />
    </header>
  );
}

export default Header;
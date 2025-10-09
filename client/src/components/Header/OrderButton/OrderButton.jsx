//import "./OrderButton.css";

function OrderButton({ label, orderBy, currentOrder, currentDir, setOrder }) {
  // Si el botón está seleccionado, cambia el estilo
  const active = currentOrder === orderBy;

  // Muestra flecha de orden si está activo
  const arrow = active ? (currentDir === "ASC" ? "▲" : "▼") : "";

  const handleClick = () => {
    setOrder(orderBy);
  };

  return (
    <button
      className={`order-btn${active ? " active" : ""}`}
      onClick={handleClick}
    >
      {label} {arrow}
    </button>
  );
}

export default OrderButton;
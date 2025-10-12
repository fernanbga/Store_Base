function OrderButton({ label, orderBy, currentOrder, currentDir, setOrder }) {
  const active = currentOrder === orderBy;
  const arrow = active ? (currentDir === "ASC" ? "▲" : "▼") : "";

  return (
    <button
      className={`order-btn${active ? " active" : ""}`}
      onClick={() => setOrder(orderBy)}
    >
      {label} {arrow}
    </button>
  );
}

export default OrderButton;
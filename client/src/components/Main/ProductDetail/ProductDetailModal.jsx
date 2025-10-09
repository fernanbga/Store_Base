// import "./ProductDetailModal.scss";

// function ProductDetailModal({ product, onClose }) {
//   if (!product) return null;
//   return (
//     <div className="modal-backdrop" onClick={onClose}>
//       <div className="modal-content" onClick={e => e.stopPropagation()}>
//         <button className="modal-close" onClick={onClose}>×</button>
//         <h2>{product.name}</h2>
//         <p><strong>Price:</strong> €{product.price}</p>
//         <p><strong>Relevance:</strong> {product.relevance}</p>
//         <p><strong>Manufacturer:</strong> {product.manufacturer_name}</p>
//         <p><strong>CIF:</strong> {product.manufacturer_cif}</p>
//         <p><strong>Address:</strong> {product.manufacturer_address}</p>
//       </div>
//     </div>
//   );
// }

// export default ProductDetailModal;
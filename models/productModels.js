const pool = require('../config/db');
const queries = require('../utils/queries');

const allowedOrderFields = ['name', 'relevance', 'price'];
const allowedOrderDirs = ['ASC', 'DESC'];

// Get paginated and ordered products
exports.getProducts = async (orderBy, orderDir, page, pageSize) => {
  const offset = (page - 1) * pageSize;
  const orderField = allowedOrderFields.includes(orderBy) ? orderBy : 'name';
  const orderDirection = allowedOrderDirs.includes(orderDir?.toUpperCase()) ? orderDir.toUpperCase() : 'ASC';

  const query = queries.getProductsPaginatedOrdered
    .replace('{ORDER_FIELD}', orderField)
    .replace('{ORDER_DIR}', orderDirection);

  const result = await pool.query(query, [pageSize, offset]);
  return result.rows;
};

// Get total count of products
exports.countProducts = async () => {
  const result = await pool.query(queries.countProducts);
  return result.rows[0].total;
};

// Get product by ID
exports.getProductById = async (id) => {
  const result = await pool.query(queries.getProductDetailById, [id]);
  return result.rows[0];
};

// Search products by name OR manufacturer, paginated and ordered
exports.searchProducts = async (search, orderBy, orderDir, page, pageSize) => {
  const offset = (page - 1) * pageSize;
  const orderField = allowedOrderFields.includes(orderBy) ? orderBy : 'name';
  const orderDirection = allowedOrderDirs.includes(orderDir?.toUpperCase()) ? orderDir.toUpperCase() : 'ASC';

  const query = queries.searchProducts
    .replace('{ORDER_FIELD}', orderField)
    .replace('{ORDER_DIR}', orderDirection);

  // Pass the search param once
  const result = await pool.query(query, [
    search || '',
    pageSize,
    offset
  ]);
  return result.rows;
};

// Count products with filter by name OR manufacturer
exports.countProductsFiltered = async (search) => {
  const result = await pool.query(queries.countProductsFiltered, [
    search || ''
  ]);
  return result.rows[0].total;
};

// Create a new product
// exports.createProduct = async (product) => {
//   const { name, relevance, price, manufacturer_id } = product;
//   const result = await pool.query(queries.createProduct, [name, relevance, price, manufacturer_id]);
//   return result.rows[0];
// };

// // Update a product
// exports.updateProduct = async (id, product) => {
//   const { name, relevance, price, manufacturer_id } = product;
//   const result = await pool.query(queries.updateProduct, [name, relevance, price, manufacturer_id, id]);
//   return result.rows[0];
// };

// // Delete a product
// exports.deleteProduct = async (id) => {
//   const result = await pool.query(queries.deleteProduct, [id]);
//   return result.rows[0];
// };
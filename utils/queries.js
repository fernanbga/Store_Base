// Get paginated and ordered list of products (with manufacturer name)
exports.getProductsPaginatedOrdered = `
SELECT products.*, manufacturers.name AS manufacturer_name
FROM products
JOIN manufacturers ON products.manufacturer_id = manufacturers.id
ORDER BY {ORDER_FIELD} {ORDER_DIR}
LIMIT $1 OFFSET $2;
`;

// Get total count of products (for pagination)
exports.countProducts = `
SELECT COUNT(*) AS total FROM products;
`;

// Get product detail by ID (with manufacturer details)
exports.getProductDetailById = `
SELECT products.*, manufacturers.name AS manufacturer_name,
       manufacturers.cif AS manufacturer_cif,
       manufacturers.address AS manufacturer_address
FROM products
JOIN manufacturers ON products.manufacturer_id = manufacturers.id
WHERE products.id = $1;
`;

// Search products by product name OR manufacturer name (paginated, ordered)
exports.searchProducts = `
SELECT products.*, manufacturers.name AS manufacturer_name
FROM products
JOIN manufacturers ON products.manufacturer_id = manufacturers.id
WHERE (products.name ILIKE '%' || $1 || '%' OR manufacturers.name ILIKE '%' || $1 || '%')
ORDER BY {ORDER_FIELD} {ORDER_DIR}
LIMIT $2 OFFSET $3;
`;

// Get count of filtered products (for search)
exports.countProductsFiltered = `
SELECT COUNT(*) AS total
FROM products
JOIN manufacturers ON products.manufacturer_id = manufacturers.id
WHERE (products.name ILIKE '%' || $1 || '%' OR manufacturers.name ILIKE '%' || $1 || '%');
`;

// Get all manufacturers
exports.getAllManufacturers = `
SELECT * FROM manufacturers;
`;

// Filter manufacturers by name
exports.searchManufacturers = `
SELECT *
FROM manufacturers
WHERE name ILIKE '%' || $1 || '%'
ORDER BY name ASC
LIMIT $2 OFFSET $3;
`;

// Count filtered manufacturers
exports.countManufacturersFiltered = `
SELECT COUNT(*) AS total
FROM manufacturers
WHERE name ILIKE '%' || $1 || '%';
`;

// // CRUD operations for products
// exports.createProduct = `
// INSERT INTO products (name, relevance, price, manufacturer_id)
// VALUES ($1, $2, $3, $4)
// RETURNING *;
// `;

// exports.updateProduct = `
// UPDATE products
// SET name = $1, relevance = $2, price = $3, manufacturer_id = $4
// WHERE id = $5
// RETURNING *;
// `;

// exports.deleteProduct = `
// DELETE FROM products
// WHERE id = $1
// RETURNING *;
// `;

// // CRUD operations for manufacturers
// exports.createManufacturer = `
// INSERT INTO manufacturers (name, cif, address)
// VALUES ($1, $2, $3)
// RETURNING *;
// `;

// exports.updateManufacturer = `
// UPDATE manufacturers
// SET name = $1, cif = $2, address = $3
// WHERE id = $4
// RETURNING *;
// `;

// exports.deleteManufacturer = `
// DELETE FROM manufacturers
// WHERE id = $1
// RETURNING *;
// `;
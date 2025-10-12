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

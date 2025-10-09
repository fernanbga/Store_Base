const pool = require('../config/db');
const queries = require('../utils/queries');

exports.getManufacturers = async (page = 1, pageSize = 10) => {
  const offset = (page - 1) * pageSize;
  const result = await pool.query(queries.getAllManufacturers + ' LIMIT $1 OFFSET $2;', [pageSize, offset]);
  return result.rows;
};

exports.searchManufacturers = async (search, page = 1, pageSize = 10) => {
  const offset = (page - 1) * pageSize;
  const result = await pool.query(queries.searchManufacturers, [search || '', pageSize, offset]);
  return result.rows;
};

exports.countManufacturersFiltered = async (search) => {
  const result = await pool.query(queries.countManufacturersFiltered, [search || '']);
  return result.rows[0].total;
};

// // Create a new manufacturer
// exports.createManufacturer = async (manufacturer) => {
//   const { name, cif, address } = manufacturer;
//   const result = await pool.query(queries.createManufacturer, [name, cif, address]);
//   return result.rows[0];
// };

// // Update a manufacturer
// exports.updateManufacturer = async (id, manufacturer) => {
//   const { name, cif, address } = manufacturer;
//   const result = await pool.query(queries.updateManufacturer, [name, cif, address, id]);
//   return result.rows[0];
// };

// // Delete a manufacturer
// exports.deleteManufacturer = async (id) => {
//   const result = await pool.query(queries.deleteManufacturer, [id]);
//   return result.rows[0];
// };
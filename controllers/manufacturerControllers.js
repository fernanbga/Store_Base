const Manufacturer = require('../models/manufacturerModels');

exports.getManufacturers = async (req, res) => {
  try {
    const { search = '', page = 1, pageSize = 10 } = req.query;
    let manufacturers, total;

    if (search.trim() !== '') {
      manufacturers = await Manufacturer.searchManufacturers(search, Number(page), Number(pageSize));
      total = await Manufacturer.countManufacturersFiltered(search);
    } else {
      manufacturers = await Manufacturer.getManufacturers(Number(page), Number(pageSize));
 
      total = manufacturers.length;
    }

    res.json({ manufacturers, total });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
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

// CRUD (if needed)
// exports.createManufacturer = async (req, res) => {
//   try {
//     const manufacturer = await Manufacturer.createManufacturer(req.body);
//     res.status(201).json(manufacturer);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.updateManufacturer = async (req, res) => {
//   try {
//     const manufacturer = await Manufacturer.updateManufacturer(req.params.id, req.body);
//     if (manufacturer) {
//       res.json(manufacturer);
//     } else {
//       res.status(404).json({ error: 'Manufacturer not found' });
//     }
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.deleteManufacturer = async (req, res) => {
//   try {
//     const manufacturer = await Manufacturer.deleteManufacturer(req.params.id);
//     if (manufacturer) {
//       res.json(manufacturer);
//     } else {
//       res.status(404).json({ error: 'Manufacturer not found' });
//     }
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
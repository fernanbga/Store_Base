const express = require('express');
const router = express.Router();
const manufacturerController = require('../controllers/manufacturerControllers');

// List manufacturers (with pagination and search)
router.get('/', manufacturerController.getManufacturers);

// CRUD (if needed)
// router.post('/', manufacturerController.createManufacturer);
// router.put('/:id', manufacturerController.updateManufacturer);
// router.delete('/:id', manufacturerController.deleteManufacturer);

module.exports = router;
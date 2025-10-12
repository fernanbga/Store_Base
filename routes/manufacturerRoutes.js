const express = require('express');
const router = express.Router();
const manufacturerController = require('../controllers/manufacturerControllers');

// List manufacturers (with pagination and search)
router.get('/', manufacturerController.getManufacturers);

module.exports = router;
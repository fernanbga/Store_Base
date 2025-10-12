const express = require('express');
const router = express.Router();
const productController = require('../controllers/productControllers');

// List products (with pagination, ordering, and search)
router.get('/', productController.getProducts);

// Product detail
router.get('/:id', productController.getProductById);

module.exports = router;
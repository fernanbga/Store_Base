const express = require('express');
const router = express.Router();
const productController = require('../controllers/productControllers');

// List products (with pagination, ordering, and search)
router.get('/', productController.getProducts);

// Product detail
router.get('/:id', productController.getProductById);

// CRUD (if needed)
// router.post('/', productController.createProduct);
// router.put('/:id', productController.updateProduct);
// router.delete('/:id', productController.deleteProduct);

module.exports = router;
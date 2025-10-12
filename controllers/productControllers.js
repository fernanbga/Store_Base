const Product = require('../models/productModels');

// Get products with pagination, ordering, and optional search
exports.getProducts = async (req, res) => {
  try {
    const {
      search = '',
      orderBy = 'name',
      orderDir = 'ASC',
      page = 1,
      pageSize = 10
    } = req.query;

    let products, total;

    if (search.trim() !== '') {
      // Filtrado por nombre de producto o fabricante
      products = await Product.searchProducts(search, orderBy, orderDir, Number(page), Number(pageSize));
      total = await Product.countProductsFiltered(search);
    } else {
      // Sin búsqueda, devuelve todos paginados/ordenados
      products = await Product.getProducts(orderBy, orderDir, Number(page), Number(pageSize));
      total = await Product.countProducts();
    }

    res.json({ products, total });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get product detail
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.getProductById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const express = require('express');
const router = express.Router();
const products = require('../data/products.json');

// Get all products
router.get('/', (req, res) => {
    const { brand } = req.query;

    let result = products;

    if (brand) {
        result = products.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
    }

    res.json(result);
});

// Get single product
router.get('/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
});

module.exports = router;

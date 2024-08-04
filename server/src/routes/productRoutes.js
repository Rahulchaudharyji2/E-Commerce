const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const catchAsync = require('../core/catchAsync');

// Get all products
router.get('/products', async(req, res) => {
    const products=await Product.find({})        // Remeber product should be start wit capital P roduct
    res.json(products);

});

// create food
router.post('/products', catchAsync(async (req, res) => {
    console.log('Entry in create product');
    const { name, price, desc, imageUrl } = req.body;

    try {
        const product = new Product({ name, price, desc, imageUrl });
        await product.save();
        console.log(product);

        res.json({
            message: "Product created successfully",
            productId: product._id
        });
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({
            message: "Error creating product",
            error: error.message
        });
    }
}));

//get food by id
/*router.get('/products/:productId', catchAsync(async (req, res) => {
    const { productId } = req.params;
    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
})); */
//get product by name
router.get('/products/search', async (req, res) => {
  const { query } = req.query;
  try {
    const products = await Product.find({ name: new RegExp(query, 'i') });
    res.json(products);
  } catch (err) {
    console.error('Error searching products:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});


/*router.get('/products/:name', async     (req, res) => {
  
    try {
      const product = await Product.findOne({ name: req.params.name });
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }); */
// Update a Food
router.patch('/products/:productId', catchAsync(async (req, res) => {
    const { productId } = req.params;
    const { name, price, desc, imageUrl } = req.body;
    await Product.findByIdAndUpdate(productId, { name, price, desc, imageUrl });
    res.status(200).json({ message: 'product updated successfully' });
  }));
  
  // Delete a food
  router.delete('/products/:productId',catchAsync( async (req, res) => {
    const { productId } = req.params;
    await Product.findByIdAndDelete(productId);
    res.status(200).json({ message: 'product deleted successfully' });
  }));


module.exports = router;

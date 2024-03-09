const express = require('express');
const { createORUpdateUser } = require('../controler/user');
const { filterProduct, productLength, productDetails } = require('../controler/products');
const { addedCart, getCartProduct, deleteCart, deleteManyCart } = require('../controler/addCart');
const { uploadOrder } = require('../controler/order');
const router = express.Router();

// creat or update new user
router.put('/user', createORUpdateUser);

// get filtering data
router.post('/products', filterProduct);

// get category data length
router.post('/length', productLength);

// get single product details
router.get('/details/:id', productDetails);

// add cart
router.put('/addCart', addedCart);

// get cart product
router.get('/getCarts/:email', getCartProduct);

// delete cart product
router.delete('/deleteCart/:id', deleteCart);

// delete many cart product
router.delete('/deleteManyCart/:email', deleteManyCart);


// add order
router.post('/order', uploadOrder)

module.exports = router;
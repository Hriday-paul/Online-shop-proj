const express = require('express');
const { createORUpdateUser } = require('../controler/user');
const { filterProduct } = require('../controler/products');
const router = express.Router();

// creat or update new user
router.put('/user', createORUpdateUser);

// get filtering data
router.post('/products', filterProduct);



module.exports = router;
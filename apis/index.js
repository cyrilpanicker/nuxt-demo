const { Router } = require('express');

const home = require('./home');
const categories = require('./categories');
const products = require('./products');

const router = Router();

router.use(home);
router.use(categories);
router.use(products);

module.exports = router;
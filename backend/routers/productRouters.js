//router/productRouter.js

const express = require('express');
const router = express.Router();
const producController = require('../controllers/productController');

//solisitud de tipo GET en la URL 
router.get('/',(req, res) => producController.getProduct(req , res));

//solisitud de tipo GET en la URL 
router.get('/:id',(req, res) => producController.getProductById(req , res));

//solisitud de tipo POST en la URL 
router.post('/',(req, res) => producController.createProduct(req , res));

//solisitud de tipo PUT en la URL 
router.put('/:id',(req, res) => producController.updateProduct(req , res));

//solisitud de tipo DELETE en la URL 
router.delete('/:id',(req, res) => producController.deleteProduct(req , res));

module.exports = router;
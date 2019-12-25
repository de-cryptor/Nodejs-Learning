const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Product = require('../models/product');

router.get('/', (req, res, next) => {
    Product.find()
    .exec()
    .then(doc =>{
        res.status(200).json(doc);
    });
});

router.post('/', (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    product.save()
    res.status(200).json({
        message: "Handling Post Requests for products",
        createdProduct:product
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
    .exec()
    .then(doc =>{
        res.status(200).json(doc);
    });
    
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "Handling Update Requests for products"
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "Handling Delete Requests for products"
    });
});

module.exports = router
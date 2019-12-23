const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling Get Requests for products"
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling Post Requests for products"
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === "special")
    {
        res.status(200).json({
            message: "You are special one.",
            id : id
        });
    }
    else
    {
        res.status(200).json({
            message: "You are normal user.",
            id : id
        });   
    }
    
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
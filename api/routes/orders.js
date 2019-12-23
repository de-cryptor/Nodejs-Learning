const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling Get Requests for orders"
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling Post Requests for orders"
    });
});

router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    if (id === "special")
    {
        res.status(200).json({
            message: "You are special orderid.",
            id : id
        });
    }
    else
    {
        res.status(200).json({
            message: "You are normal orderid.",
            id : id
        });   
    }
    
});

router.patch('/:orderId', (req, res, next) => {
    
    id = req.params.orderId
    res.status(200).json({
        message: " Handling Update Requests for order id : " + id
    });
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: "Handling Delete Requests for orders"
    });
});

module.exports = router
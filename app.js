const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')

/* app.use((req,res,next) => {
    res.status(200).json({
        message :'It Works'
    });

}); */


const ProductRoutes = require('./api/routes/products')
const OrderRoutes = require('./api/routes/orders')

//app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Authorization')
});

app.use('/products', ProductRoutes);
app.use('/orders', OrderRoutes);

// if none of the above route matches

app.use((req,res,next)=>{
    const error = new Error("Not Found");
    error.status = 404;
    next(error);

});

//Handling all type of errors
app.use((error,req,res,next)=> {
    res.status(error.status || 500);
    res.json ({
        error: {
            message : error.message
        }
        
    });
});

module.exports = app;

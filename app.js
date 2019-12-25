const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//const morgan = require('morgan');

/* app.use((req,res,next) => {
    res.status(200).json({
        message :'It Works'
    });

}); */


const ProductRoutes = require('./api/routes/products')
const OrderRoutes = require('./api/routes/orders')

mongoose.connect('mongodb+srv://decryptor:8255@cluster0-kzzgf.mongodb.net/test?retryWrites=true&w=majority',{
    useMongoClient: true
});
//app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

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

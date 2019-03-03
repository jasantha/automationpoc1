var express = require('express');
var app = express();

var bodyParser = require('body-parser')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// parse application/json
app.use(bodyParser.json())



var stores = [
    { "storeNumber":"1", "storeName": "Store Name1", "city": "Mooresville", "state": "NC" },
    { "storeNumber":"2", "storeName": "Store Name2" , "city": "Boston", "state": "MA"},
    { "storeNumber":"3", "storeName": "Store Name3" , "city": "San Franciso", "state": "CA"},
    { "storeNumber":"4", "storeName": "Store Name4", "city": "Tampa", "state": "FL" }
]

var products = [
    { "id":"1", "name": "product 1", "description": "description1"},
    { "id":"2", "name": "product 1" , "description": "description2"},
    { "id":"3", "name": "product 1" , "description": "description3"},
    { "id":"4", "name": "product 1", "description": "description4" }
]

app.get('/stores', (req, res)=> {
    res.json(stores)
})

app.get('/products', (req, res)=> {
    res.json(products)
})

app.post('/stores', (req, res)=>{
    var store = req.body;
    console.log(store);
    stores.push(store);
    res.status(201).json(stores);
})

app.post('/products', (req, res)=>{
    var product = req.body;
    console.log(product);
    products.push(product);
    res.status(201).json(products);
})

app.listen(3000,()=>{console.log('Listening on port 3000')})
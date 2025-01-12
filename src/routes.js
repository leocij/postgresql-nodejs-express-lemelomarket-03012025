const express = require('express');
const ProductController = require('./controllers/ProductController');

const routes = express.Router();

// const routes = express();

// routes.get('/', (req, res) => {
//     res.send('Hello World!');
// });

routes.use('/products', ProductController);

module.exports = routes;
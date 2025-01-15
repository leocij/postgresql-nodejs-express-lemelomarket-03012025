require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const messages = require('./messages/messages.json');

const app = express();

app.use(express.json());

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        status: 'error',
        message: messages.error.internalServerError,
        data: null,
    });
});

app.use('/', routes);

app.listen(8080, () => {
    console.log('Server listening on port 8080');
});
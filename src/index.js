require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const messages = require('./messages/messages.json');

const app = express();

// Opções de CORS
const corsOptions = {
    origin: 'http://localhost:3000',  // Permite a sua origem
};
 
app.use(cors(corsOptions)); // Aplica o middleware CORS

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
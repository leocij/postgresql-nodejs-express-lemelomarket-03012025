const express = require('express');
const ProductService = require('../services/ProductService');
const messages = require('../messages/messages.json');
const { formatMessage } = require('../utils/messageFormatter');

const ProductController = express.Router();

ProductController.post('', async (req, res) => {
    try {
        const { name, brand } = req.body;

        if (!name || typeof name !== 'string' || name.trim() === '') {
            return res.status(400).json({
                status: 'error',
                message: formatMessage(messages.error.missingFields, { fields: 'Name' }),
                data: null,
            });
        }

        if (!brand || typeof brand !== 'string' || brand.trim() === '') {
            return res.status(400).json({
                status: 'error',
                message: formatMessage(messages.error.missingFields, { fields: 'Brand' }),
                data: null,
            });
        }

        await ProductService.createProduct({ name, brand });

        res.status(201).json({
            status: 'success',
            message: formatMessage(messages.success.created, { resource: 'Product' }),
            data: null,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'success',
            message: messages.error.internalServerError,
            data: null,
        });
    }
});

module.exports = ProductController;
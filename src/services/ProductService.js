const ProductRepository = require('../repositories/ProductRepository');

class ProductService {
    static async createProduct(product) {
        return await ProductRepository.addProduct(product);
    }
}

module.exports = ProductService;
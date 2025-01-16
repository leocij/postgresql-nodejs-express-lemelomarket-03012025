const ProductRepository = require('../repositories/ProductRepository');

class ProductService {
    static async createProduct(product) {
        await ProductRepository.addProduct(product);
    }

    static async getAllProducts() {
        return await ProductRepository.getAllProducts();
    }
}

module.exports = ProductService;
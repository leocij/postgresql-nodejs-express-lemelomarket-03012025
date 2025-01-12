class ProductRepository {
    static products = [];

    static async addProduct(product) {
        this.products.push(product);
        console.log("Updated product list:", this.products);
        return product;
    }
}

module.exports = ProductRepository;

const Database = require('../config/Database');

class ProductRepository {
    
    static async addProduct(product) {
        const { name, brand } = product;
        const response = await Database.query(`
            insert into products (
                name, brand, created_at, updated_at
            ) values (
                $1, $2, current_timestamp, current_timestamp
            );
        `,[
            name, brand
        ]);
    }

    static async getAllProducts() {
        const response = await Database.query(`
            select * from products;
        `);
        return response.rows;
    }
}

module.exports = ProductRepository;

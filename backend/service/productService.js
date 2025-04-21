const productModel = require('../models/prodructModel')

class ProductService{
    async getProduct(){
        return await productoModel.getAllProduct();
    }

    async getProductById(id){
        return await productoModel.getProductById(id);
    }
    

    async addProduct(data) {
        return await productModel.createProduct(data);
    }

    async modifyProduct(id, data){
        return await productModel.updateProduct(id, data);
    }

    async removeProduct(id){
        return await productModel.deleteProduct(id);
    }
}
module.exports = new ProductService();
const db = require('../config/db');

class ProductModel {

    // funcion para octener todos los registros de la tlabla  productos
    async  getAllProduct(){
        const result = await db.query('SELECT * FROM producto')
        return result.rows;
    }
    // fuciona para obtener un registro por su id 
    async getProductById(id){
        const result = await db.query('SELECT * FROM  producto WHERE id = $1',[id]);
        return result.rows[0];
        // Reporta el primer producto (deberia ser unico por id )
    }
    //funcion para crear un nuevo registero 
    async createProduct({ nombre, precio, descripcion }) {
        const result = await db.query(
            'INSERT INTO producto (nombre, precio, descripcion) VALUES ($1, $2, $3) RETURNING *',
            [nombre, precio, descripcion]
        );
        return result.rows[0];
    }
    //funcion para actualizar un registro
    async updateProduct(id,{nombre , precio , descripcion}){
        const result = await db.query(
        'UDATE  producto  SET nombre = $1, precio = $2 , descripcion = $3 WHERE id =$4 RETUNING *',
        [nombre,precio,descripcion,id]
        );
        return result.rows[0];
    }
    //funcion para eliminar registro
    async deleletProduct(id){
        await db.query('delete from producto where id = $1 ', [id]);
    }

}

module.exports = new ProductModel();
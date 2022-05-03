var pool = require("./bd");

async function getProductosDestacados(){
    var query = 'select * from productosdestacados order by id desc limit 3';
    var rows = await pool.query(query);
    return rows;
}

async function createProductoDestacado(obj) {
    try {
        var query = "insert into productosdestacados set ?";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteProductoDestacado(id){
    var query = "delete from productosdestacados where id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getProductoDestacadoById(id){
    var query = "select * from productosdestacados where id = ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function editProductoDestacadoById(obj, id){
    try {
        var query = "update productosdestacados set ? where id = ? ";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = {getProductosDestacados, createProductoDestacado, deleteProductoDestacado, editProductoDestacadoById, getProductoDestacadoById}
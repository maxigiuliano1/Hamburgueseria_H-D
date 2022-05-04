var pool = require("./bd");

async function getServicios(){
    var query = 'select * from servicios order by id desc limit 5';
    var rows = await pool.query(query);
    return rows;
}

async function createServicio(obj) {
    try {
        var query = "insert into servicios set ?";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteServicio(id){
    var query = "delete from servicios where id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getServicioById(id){
    var query = "select * from servicios where id = ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function editServicioById(obj, id){
    try {
        var query = "update servicios set ? where id = ? ";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = {getServicios, createServicio, deleteServicio, editServicioById, getServicioById}
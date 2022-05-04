var pool = require("./bd");

async function getMenu(){
    var query = 'select * from menu order by id desc';
    var rows = await pool.query(query);
    return rows;
}

async function createMenu(obj) {
    try {
        var query = "insert into menu set ?";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteMenu(id){
    var query = "delete from menu where id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getMenuById(id){
    var query = "select * from menu where id = ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function editMenuById(obj, id){
    try {
        var query = "update menu set ? where id = ? ";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = {getMenu, createMenu, deleteMenu, editMenuById, getMenuById}
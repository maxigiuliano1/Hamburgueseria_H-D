var pool = require("./bd");

async function getNosotros(){
    var query = 'select * from nosotros order by id asc';
    var rows = await pool.query(query);
    return rows;
}

async function createNosotros(obj) {
    try {
        var query = "insert into nosotros set ?";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteNosotros(id){
    var query = "delete from nosotros where id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getNosotrosById(id){
    var query = "select * from nosotros where id = ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function editNosotrosById(obj, id){
    try {
        var query = "update nosotros set ? where id = ? ";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = {getNosotros, createNosotros, deleteNosotros, editNosotrosById, getNosotrosById}
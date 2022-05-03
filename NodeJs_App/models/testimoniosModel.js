var pool = require("./bd");

async function getTestimonios(){
    var query = 'select * from testimonios order by id desc limit 5';
    var rows = await pool.query(query);
    return rows;
}

async function createTestimonio(obj) {
    try {
        var query = "insert into testimonios set ?";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteTestimonio(id){
    var query = "delete from testimonios where id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getTestimonioById(id){
    var query = "select * from testimonios where id = ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function editTestimonioById(obj, id){
    try {
        var query = "update testimonios set ? where id = ? ";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = {getTestimonios, createTestimonio, deleteTestimonio, editTestimonioById, getTestimonioById}
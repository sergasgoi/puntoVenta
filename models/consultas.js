var pool = require('./bd');
var md5 = require('md5')

async function getUser(user, password) {
    try {
        var query = 'select * from usuarios where usuario = ? and password = ? limit 1';
        var datos = await pool.query(query, [user, md5(password)]);
        return datos[0];
    } catch (error) {
        console.log(error);
    }

}

async function getProd() {

    var query = 'select * from productos';
    var datos = await pool.query(query);
    return datos;

}


async function agregarRegistros(array) {

    var query = 'insert into registros values?';
    var datos = await pool.query(query, [array]);
    return datos;

}

async function agregarTurno(id_usuario, name) {

    var query = 'insert into turnos(iduser, name , horain, horafin, total, condicion) values(?, ?, NOW(), 0, 0, 0)';
    var datos = await pool.query(query, [id_usuario, name]);
    return datos;
}

async function getTurno() {

    var query = 'select * from turnos order by id desc limit 1';
    var datos = await pool.query(query);
    return datos[0];

}

async function getTurnos(iduser) {

    var query = 'SELECT *, DATE_FORMAT(horain, "%d/%m/%y : %T") AS horai, DATE_FORMAT(horafin, "%d/%m/%y : %T") AS horafn FROM turnos where iduser=? ORDER BY id DESC';
    var datos = await pool.query(query, [iduser]);
    return datos;

}

async function getTurnosAdm() {

    var query = 'SELECT *, DATE_FORMAT(horain, "%d/%m/%y : %T") AS horai, DATE_FORMAT(horafin, "%d/%m/%y : %T") AS horafn FROM turnos ORDER BY id DESC';
    var datos = await pool.query(query);
    return datos;

}

async function updateTurnos(id) {
    var query = 'update turnos set horafin=NOW(), condicion=true where id=?';
    var datos = await pool.query(query, [id]);
    return datos;
}

async function getRegistros(idturno) {

    var query = 'select * from registros where idturno=?';
    var datos = await pool.query(query, [idturno]);
    return datos;

}

async function updateTotal(tot, id) {
    var query = 'update turnos set total=total+? where id=?';
    var datos = await pool.query(query, [tot, id]);
    return datos;
}

async function updateTime(cont) {
    var query = 'update registros set time=CURRENT_TIMESTAMP order by id desc limit ?';
    var datos = await pool.query(query, [cont]);
    return datos;
}

async function getProducto(name) {

    var query = 'SELECT COUNT(*) as total FROM productos where nombre=?';
    var datos = await pool.query(query, [name]);
    return datos;

}

async function getUsuario(user) {

    var query = 'SELECT COUNT(*) as total FROM usuarios where usuario=?';
    var datos = await pool.query(query, [user]);
    return datos;

}

async function agregarProducto(name, precio) {

    var query = 'insert into productos(nombre, precio) values(?, ?)';
    var datos = await pool.query(query, [name, precio]);
    return datos;
}

async function getUsers() {
    try {
        var query = 'select * from usuarios where admin=0';
        var datos = await pool.query(query);
        return datos;
    } catch (error) {
        console.log(error);
    }

}

async function deleteUser(id) {
    var query = 'delete from usuarios where id=?';
    var datos = await pool.query(query, [id]);
    return datos;
}
async function deleteTurnos(id) {
    var query = 'delete from turnos where iduser=?';
    var datos = await pool.query(query, [id]);
    return datos;
}
async function deleteRegistros(id) {
    var query = 'delete from registros where iduser=?';
    var datos = await pool.query(query, [id]);
    return datos;
}

async function deleteProducto(id) {
    var query = 'delete from productos where id=?';
    var datos = await pool.query(query, [id]);
    return datos;
}

async function getProductoById(id) {

    var query = 'select * from productos where id=?';
    var datos = await pool.query(query, [id]);
    return datos[0];

}

async function editProductos(obj, id) {

    var query = 'update productos set ? where id=?';
    var datos = await pool.query(query, [obj, id]);
    return datos;

}

async function agregarUser(user, pass) {

    var query = 'insert into usuarios(usuario, password) values(?, ?)';
    var datos = await pool.query(query, [user, md5(pass)]);
    return datos;
}

module.exports = { getProd, getUser, agregarRegistros, agregarTurno, getTurno, getTurnos, updateTurnos, getRegistros, updateTotal, updateTime, getTurnosAdm, getProducto, agregarProducto, getUsers, deleteUser, deleteTurnos, deleteRegistros, deleteProducto, getProductoById, editProductos, getUsuario, agregarUser};
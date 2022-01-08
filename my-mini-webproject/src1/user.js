const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "project1",
};

const getUser = async () => {
    const connection = mysql.createConnection(dbinfo);

    await connection.connectAsync();

    let sql = `SELECT * FROM user`;
    // let sql = `SELECT * FROM user ORDER BY ID DESC`;
    // let sql = `SELECT * FROM user WHERE ID=?`;
    const list = await connection.queryAsync(sql, []);

    await connection.endAsync();
    return list;
};

async function adduser(user) {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let sql = `insert into user (firstname,lastname,username,password) values(?,?,?,?)`;
    await connection.queryAsync(sql, [user.username, user.password]);
    await connection.endAsync();
};







module.exports = {
    adduser,
    getUser
};
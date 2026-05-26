const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "formulario"
});

connection.connect((error) => {

    if(error){
        console.log("Error de conexión");
        return;
    }

    console.log("Conectado a MySQL");
});

module.exports = connection;
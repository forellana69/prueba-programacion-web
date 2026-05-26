const express = require("express");
const session = require("express-session");
const path = require("path");
const connection = require("./database/connection");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true}));

app.use(session({
    secret: 'SECRETO',
    resave: false,
    saveUninitialized: true
}))

app.get("/", (req, res) => {
    res.render("index");
})

app.post("/guardar", (req, res) => {

    // Obtener datos
    const { nombre, apellido, correo, tel } = req.body;


    // Consulta SQL
    const sql = `
        INSERT INTO datos(nombre, apellido, correo, tel)
        VALUES (?, ?, ?, ?)
    `;


    // Ejecutar consulta
    connection.query(
        sql,
        [nombre, apellido, correo, tel],

        (error, resultado) => {

            if(error){

                console.log(error);

                return res.send("Error al guardar");
            }

            console.log(resultado);

            res.send("Datos guardados correctamente");
        }
    );
});

app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:3000")
})
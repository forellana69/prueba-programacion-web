const express = require("express");
const router = express.Router();

const connection = require("../database/connection");

router.get("/", (req, res) => {
    res.render("index");
});

router.post("/guardar", (req, res) => {

    const { alias, correo, tel, pais } = req.body;

    const sql = `
        INSERT INTO datos(alias, correo, tel, pais)
        VALUES (?, ?, ?, ?)
    `;

    connection.query(
        sql,
        [alias, correo, tel, pais],

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

module.exports = router;
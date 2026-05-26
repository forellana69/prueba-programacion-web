const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();
const port = 3000;

const rutas = require("./routes/rutas");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));


app.use(session({
    secret: 'SECRETO',
    resave: false,
    saveUninitialized: true
}));

app.use("/", rutas);


app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
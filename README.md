1. Extensiones a instalar en terminar CMD:

-npm init -y

-npm install espress

npm install espress-session

npm install ejs

npm install mysql2

2. lenguajes utilizados:

-Javascript
-HTML
-CSS
-Mysql

3. Archivos:

- app.js: Se importan los modulos usados y la carpeta de css, se inicia la sesion y se levanta el servidor.

- index.ejs: Se crea el formulario que redirige hacia la ruta de guardar.

-rutas.js: contiene las rutas que se utilizaran e importaran en los archivos.

-styles.css: contiene el estilo de la página web.

-connection.js: Contiene la conexion hacia la BD que se importará en rutas y app.js.

4. Base de datos utilizada:

CREATE DATABASE formulario;

USE formulario;

CREATE TABLE datos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    alias VARCHAR(50) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    tel VARCHAR(20) NOT NULL,
    pais VARCHAR(50) NOT NULL
);

Se adjunta carpeta de evidencias para comprobar la funcionalidad del sistema.

5. Elementos de seguridad:

Se dicidio usar un modulo de sesion para que guarde la información de la persona que se postulo y no permite ingresar datos nulos por la misma exigencia del formulario y de la base de datos teniendo doble validación de nulos.
const path = require('path');
const express = require('express');
const app = new express();
const mysql = require('mysql');



//sql host section
const con = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "ZAQ!2wsx"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Database connected!");
});

//website host section
app.use("/public", express.static(path.join(__dirname, 'public')));
app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html');
});
app.listen(3000);
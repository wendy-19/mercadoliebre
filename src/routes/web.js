const express = require("express");
const app = express.Router();
const path = require("path");

app.get('/', (req,res) => res.sendFile(path.join(__dirname,"../views", "index.html")));

app.get('/login', (req,res) => res.sendFile(path.join(__dirname,"../views", "login.html")));

app.get('/formulario', (req,res) => res.sendFile(path.join(__dirname,"../views", "formulario.html")));

module.exports = app;
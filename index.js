require('dotenv').config();
const express = require('express');
const app = express();
const fs = require('fs');
const Mustache = require('mustache');

app.use(express.static('public'));

app.get('/', function (req, res) {
    const template = fs.readFileSync('./public/index.mst').toString();
    const menuH = fs.readFileSync('./public/partials/menu.mst').toString();
    const html = Mustache.to_html(template, {nickname: 'asdsa'}, {menu: menuH});
    res.send(html);
});

app.get('/login', function (req, res) {
    const template = fs.readFileSync('./public/views/login.mst').toString();
    const menuH = fs.readFileSync('./public/partials/menu.mst').toString();
    const html = Mustache.to_html(template, {}, {menu: menuH});
    res.send(html);
});

app.get('/register', function (req, res) {
    const html = fs.readFileSync('./public/views/register.html').toString();
    res.send(html);
});

app.listen(process.env.PORT, function () {
    console.log(`Server running on port: ${process.env.PORT}`);
});

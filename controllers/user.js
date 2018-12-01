const fs = require('fs');
const Mustache = require('mustache');

class User {
    async loginPage(req, res) {
        const template = fs.readFileSync('./public/views/login.mst').toString();
        const menu = fs.readFileSync('./public/partials/menu.mst').toString();
        const footer = fs.readFileSync('./public/partials/footer.mst').toString();
        const html = Mustache.to_html(template, {}, { menu, footer });
        res.send(html);
    }

    async registerPage(req, res) {
        const html = fs.readFileSync('./public/views/register.mst').toString();
        res.send(html);
    }
}

module.exports = new User();
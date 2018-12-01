const fs = require('fs');
const Mustache = require('mustache');

class Information {
    async indexPage(req, res) {
        console.log(req.cookies);
        const template = fs.readFileSync('public/index.mst').toString();
        const menu = fs.readFileSync('public/partials/menu.mst').toString();
        const footer = fs.readFileSync('public/partials/footer.mst').toString();
        const html = Mustache.to_html(template, { nickname: req.cookies }, { menu, footer });
        res.send(html);
    }
}

module.exports = new Information();
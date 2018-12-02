const fs = require('fs');
const Mustache = require('mustache');

class Question {
    async questionPage(req, res) {
        const template = fs.readFileSync('public/views/question.mst').toString();
        const menu = fs.readFileSync('public/partials/menu.mst').toString();
        const footer = fs.readFileSync('public/partials/footer.mst').toString();
        const data = {
            nickname: req.cookies.nickname,
            img: 'https://vignette.wikia.nocookie.net/es.pokemon/images/2/2c/Pok%C3%A9mon_Jukebox_icono.png/revision/latest?cb=20150624132304', 
            category: 'IA',
            question: 'Wicht is better to program a MLP?',
            opc1: 'Python',
            opc2: 'Java',
            opc3: 'C++',
        };
        const html = Mustache.to_html(template, data, { menu, footer });
        res.send(html);
    }
    
    async addQuestionPage(req, res) {
        const template = fs.readFileSync('public/views/add_question.mst').toString();
        const menu = fs.readFileSync('public/partials/menu.mst').toString();
        const footer = fs.readFileSync('public/partials/footer.mst').toString();
        const data = {
            nickname: req.cookies.nickname,
            categories: [
                {category: 'IA'},
                {category: 'DB'},
                {category: 'Software'},
                {category: 'Web'},
            ]
        };
        const html = Mustache.to_html(template, data, { menu, footer });
        res.send(html);
    }
}

module.exports = new Question();

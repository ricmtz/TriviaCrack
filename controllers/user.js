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

    async profilePage(req, res) {
        const template = fs.readFileSync('public/views/profile.mst').toString();
        const menu = fs.readFileSync('public/partials/menu.mst').toString();
        const friends = fs.readFileSync('public/partials/friend_list.mst').toString();
        const footer = fs.readFileSync('public/partials/footer.mst').toString();
        const data = {
            nickname: req.cookies.nickname,
            email: 'asas@gmail.com',
            personal: true,
            friends: [
                {
                    img: 'https://www.enriquedans.com/wp-content/uploads/2018/06/GitHub-Octocat.jpg',
                    nickname: 'Asasdas_asdad',
                },
                {
                    img: 'https://www.enriquedans.com/wp-content/uploads/2018/06/GitHub-Octocat.jpg',
                    nickname: 'Asasdas_asdad',
                },
                {
                    img: 'https://www.enriquedans.com/wp-content/uploads/2018/06/GitHub-Octocat.jpg',
                    nickname: 'Asasdas_asdad',
                }
            ]
        };
        const html = Mustache.to_html(template, data, { menu, footer, friends });
        res.send(html);
    }

    async profileEditPage(req, res) {
        const template = fs.readFileSync('public/views/profile_edit.mst').toString();
        const menu = fs.readFileSync('public/partials/menu.mst').toString();
        const footer = fs.readFileSync('public/partials/footer.mst').toString();
        const data = {
            nickname: req.cookies.nickname,
            email: 'asas@gmail.com',
            password: 'asasdasd',
        };
        const html = Mustache.to_html(template, data, { menu, footer });
        res.send(html);
    }

    async addEmailsPage(req, res) {
        const template = fs.readFileSync('public/views/add_emails.mst').toString();
        const menu = fs.readFileSync('public/partials/menu.mst').toString();
        const email_list = fs.readFileSync('public/partials/email_list.mst').toString();
        const footer = fs.readFileSync('public/partials/footer.mst').toString();
        const data = {
            nickname: req.cookies.nickname,
            email: 'asas@gmail.com',
            emails: [
                { email: 'asas@gmail.com' },
                { email: 'qweqwe@gmail.com' },
                { email: '123232asd@gmail.com' },
            ]
        };
        const html = Mustache.to_html(template, data, { menu, footer, email_list });
        res.send(html);
    }
}

module.exports = new User();

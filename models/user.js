const API = require('./api');

class User {
    async login(req) {
        const header = {
            "Content-Type": "application/x-www-form-urlencoded",
        }
        const url = `${process.env.HOST}/login`;
        const response = await API.postMethod(url, req.body, header)
            .catch((err) => { });
        return response;
    }
}

module.exports = new User();

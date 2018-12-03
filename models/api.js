const fetch = require('node-fetch');
const request = require('request-promise');

class API {
    async getMethod(url = '', body = {}, headers = {}) {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(res => res.json())
            .then((res) => { console.log(res); })
            .catch(err => console.log(err));
    }

    async postMethod(url, body = {}, header = {}) {
        const options = {
            method: 'POST',
            url,
            headers: { ...header },
            form: { ...body }
        };
        let result = {};
        await request(options, (error, response, body) => {
            result = { statusCode: response.statusCode, body };
        });
        return result;
    }

    async patchMethod(url, body = {}, headers = {}) {

    }

    async delMethod(url, body = {}, headers = {}) {

    }
}

module.exports = new API();

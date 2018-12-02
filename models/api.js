const fetch = require('node-fetch');

class API {
    async getMethod(url='', options={}) {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(res => res.json())
            .then((res) => { console.log(res); })
            .catch(err => console.log(err));
    }

    async postMethod(url, options) {

    }

    async patchMethod(url, options) {

    }

    async delMethod(url, options) {

    }
}

module.exports = new API();

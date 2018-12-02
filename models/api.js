const fetch = require('node-fetch');

class API {
    async getMethod(url='', body={}, header={}) {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(res => res.json())
            .then((res) => { console.log(res); })
            .catch(err => console.log(err));
    }

    async postMethod(url, body={}, header={}) {

    }

    async patchMethod(url, body={}, header={}) {

    }

    async delMethod(url, body={}, header={}) {

    }
}

module.exports = new API();

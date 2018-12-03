class API {
    static post(url='', body={}, header={}) {
        return fetch(url, {
            method: 'POST',
            rejectUnauthorized:false,
            headers: {
                ...header,
            },
            body,
        });
    }
}
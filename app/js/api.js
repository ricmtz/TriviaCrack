class API {
    static post(url='', req={}) {
        return fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: "asd=123& qweq=123asd3",
        });
    }
}
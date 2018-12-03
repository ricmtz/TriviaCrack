window.addEventListener('load', validateLoginForm);

function invalitInput(node) {
    node.classList.add('incorrect');
}

function valitInput(node) {
    node.classList.remove('incorrect');
}

const VALITATIONS = {
    id: /^[0-9]+$/,
    nickname: /^[a-zA-Z][\w]{2,}$/,
    word: /[a-zA-ZñÑ ]{3,}/,
    text: /[\wñÑ #@$%?()]{3,}/,
    password: /^[\wñÑ#@$%]{5,}$/,
    file: /^[\w]+\.(png|jpg)$/,
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
}

function valId(data) {
    return (VALITATIONS.id.test(data))
}

function valNickname(data) {
    return (VALITATIONS.nickname.test(data))
}

function valWord(data) {
    return (VALITATIONS.word.test(data))
}

function valText(data) {
    return (VALITATIONS.text.test(data))
}

function valPassword(data) {
    return (VALITATIONS.password.test(data))
}

function valFile(data) {
    return (VALITATIONS.file.test(data))
}

function valEmail(data) {
    return (VALITATIONS.email.test(data))
}

function validateLoginForm() {
    try {
        const btnLogin = document.getElementById('btn-login');
        const formLogin = document.getElementById('form-login');
        const nickname = formLogin.elements.namedItem('nickname');
        const password = formLogin.elements.namedItem('password');
        btnLogin.addEventListener('click', function () {
            let correct = true;
            if(!valNickname(nickname.value)){
                invalitInput(nickname);
                correct = false;
            } else {
                valitInput(nickname);
            }
            if(!valNickname(password.value)){
                invalitInput(password);
                correct = false;
            } else {
                valitInput(password);
            }
            if(correct){
                API.post('/login').then((res) => {
                    console.log(res);
                    // window.location = res.url;
                })
            }
        });
    } catch (error) {

    }
}

function apiLogin(user, password) {
    console.log(user, password);
    return false;
}
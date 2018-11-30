
function show() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hide');
}

function headerScroll() {
    const header = document.getElementsByTagName('header');
    const logo = document.getElementById('logo');
    const options = document.getElementById('drop-menu');
    const menu = document.getElementById('menu').parentNode;
    if (window.scrollY <= 100){
        header[0].classList.remove('scroller');
        options.classList.remove('scroller');
        menu.classList.add('menu');
        itemMenuScroll(false);
    }
    else {
        header[0].classList.add('scroller');
        options.classList.add('scroller');
        menu.classList.remove('menu');
        itemMenuScroll(true);
    }
}

function itemMenuScroll(add){
    const items = document.getElementsByTagName('a');
    for (i of items) {
        if (i.parentNode.parentNode.id === 'menu') {
            if (add) {
                i.classList.add('scroller');
            }
            else {
                i.classList.remove('scroller');
            }
        }
    }
}

function changePictureWelcome(){
    const picture = document.getElementById('welcome');
    console.log(window.screen.width);
    if (window.screen.width >= 400) {
        picture.src = "img/welcome.png";
    }
    else {
        picture.src = "img/logo.png";
    }
}

function loading(){
    const btn = document.getElementById('drop-menu');
    btn.addEventListener('click', show);
    changePictureWelcome();
}

window.addEventListener('scroll',headerScroll);
window.addEventListener('load', loading);
window.addEventListener('resize', changePictureWelcome);

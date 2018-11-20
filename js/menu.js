const btn = document.getElementById('drop-menu');
const menu = document.getElementById('menu');


function show() {
    menu.classList.toggle('hide');
}

btn.addEventListener('click', show);
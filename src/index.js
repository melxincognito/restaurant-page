import _ from 'lodash';
import './style.css';
import makePage from './mp';

import carta from './modules/menu.js';
import horarios from './modules/reserve.js'
import imagen from './modules/home.js'



function init() {
    makePage()
}


function setListeners() {

    function clearContent() {
        document.getElementById('textContent').innerHTML = ''
        
    }

    const reserva = document.getElementById('reservaBtn');
    const menu = document.getElementById('menuBtn');
    const home = document.getElementById('homeBtn');

    reserva.addEventListener('click', () => {
        clearContent()
        horarios();
    })

    menu.addEventListener('click', () => {
        clearContent();
        carta();
    })

    home.addEventListener('click', () => {
        clearContent();
        imagen();
    })

    
}

init();

setListeners();

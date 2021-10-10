import _ from 'lodash';
import './style.css';

import carta from './menu.js';
import horarios from './reserve.js'
import imagen from './home.js'



function clear() {
    window.onload = header()
}



export default function header() {
    const page = document.getElementById('content');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const reservaBtn = document.createElement('button');
    const headContainer = document.createElement('div');
    const navContainer = document.createElement('div');
    const header = document.createElement('div');
    const greeting = document.createElement('div');
    

    page.classList.add('content');
    headContainer.classList.add('headContainer');
    navContainer.classList.add('navContainer');
    greeting.classList.add('greeting');

    homeBtn.innerHTML = '🇪🇸 Home 🇪🇸';
    menuBtn.innerHTML = '🇪🇸 Menú 🇪🇸';
    reservaBtn.innerHTML = '🇪🇸 Reserva 🇪🇸'

    header.innerHTML = "Mel's Veggie Kitchen";
    greeting.innerHTML = "All our food is 100% Fresh with plenty of plant-based options";

    homeBtn.onclick = imagen;
    menuBtn.onclick = carta;
    reservaBtn.onclick = horarios;
   

    headContainer.appendChild(header);
    headContainer.appendChild(greeting);
    navContainer.appendChild(homeBtn);
    navContainer.appendChild(menuBtn);
    navContainer.appendChild(reservaBtn);

    page.appendChild(headContainer);
    page.appendChild(navContainer);

    return page;
    
}


header();







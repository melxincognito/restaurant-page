

function makeHeader() {

    const headContainer = document.createElement('div');
    const header = document.createElement('div');
    const greeting = document.createElement('div');

    headContainer.classList.add('headContainer');
    greeting.classList.add('greeting');

    header.innerHTML = "Mel's Veggie Kitchen";
    greeting.innerHTML = "All our food is 100% Fresh with plenty of plant-based options";

    headContainer.appendChild(header);
    headContainer.appendChild(greeting);

    return headContainer

}



function makeBtns() {

    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const reservaBtn = document.createElement('button');
    const navContainer = document.createElement('div');

    homeBtn.innerHTML = '🇪🇸 Home 🇪🇸';
    homeBtn.setAttribute('id', 'homeBtn');
    menuBtn.innerHTML = '🇪🇸 Menú 🇪🇸';
    menuBtn.setAttribute('id', 'menuBtn');
    reservaBtn.innerHTML = '🇪🇸 Reserva 🇪🇸';
    reservaBtn.setAttribute('id', 'reservaBtn')


    navContainer.appendChild(homeBtn);
    navContainer.appendChild(menuBtn);
    navContainer.appendChild(reservaBtn);

    navContainer.classList.add('navContainer');

    return navContainer;

}

function createMain() {
    const main = document.createElement('div');
    main.setAttribute('id', 'textContent');
    main.textContent = 'hello';

    return main;

}

function createFooter() {
    const foot = document.createElement('div');
    foot.classList.add('foot');
    foot.textContent = 'reserva hoy!'

    return foot;

}

export default function makePage() {

    const head = makeHeader();
    const btns = makeBtns();
    const mainContent = createMain();
    const footer = createFooter()

 
    const page = document.getElementById('content');
    page.appendChild(head);
    page.appendChild(btns);
    page.appendChild(mainContent)
    page.appendChild(footer);

    return page

}



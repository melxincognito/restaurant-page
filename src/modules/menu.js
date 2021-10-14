import Icon from './wing.png';
import Foto from './sammich.png';
import Burrito from './burrito.png'
import Croquetas from './croquetas.png';
import Pizza from './pizza.png'
import Spaghetti from './icon.png'




export default function carta() {

    const contentBox = document.getElementById('textContent')
    const menuContainer = document.createElement('div');
    const alitas = document.createElement('div');
    const hamburgesa = document.createElement('div');
    const burritos = document.createElement('div');
    const croquetas = document.createElement('div');
    const pizza = document.createElement('div');
    const spaghetti = document.createElement('div')
    const alitasIcon = new Image();
    const hamburgesaIcon = new Image();
    const burritoIcon = new Image();
    const croquetasIcon = new Image();
    const pizzaIcon = new Image();
    const spaghettiIcon = new Image();

    menuContainer.classList.add('menuContainer');


    alitasIcon.src = Icon;
    hamburgesaIcon.src = Foto;
    burritoIcon.src = Burrito;
    croquetasIcon.src = Croquetas;
    pizzaIcon.src = Pizza;
    spaghettiIcon.src = Spaghetti;
    

    alitas.innerHTML = "Alitas: Nuestras alitas de 'pollo' hecho con yaka y canela";
    hamburgesa.innerHTML = "Hamburgesa de pollo: Hamburguesa de pollo frito con lechuga, tomate, cebolla, aguacate y nuestra salsa secreta";
    burritos.innerHTML = "Carne asada burrito: Burrito hecho con crema, aguacate, salsa picante, patatas fritas y espinacas";
    croquetas.innerHTML = 'Croquetas: croquetas de espinacas fritas';
    pizza.innerHTML = 'Pizza de Mama: Pizza con setas, espinacas, tomate, cebolla y salsa hecho especialmente'
    spaghetti.innerHTML = 'Spaghetti Bolagnesa: Spaghetti con nuestra salsa bolagnesa y queso parmesano';


    menuContainer.appendChild(alitasIcon);
    menuContainer.appendChild(hamburgesaIcon);
    menuContainer.appendChild(burritoIcon);
    menuContainer.appendChild(croquetasIcon);
    menuContainer.appendChild(pizzaIcon);
    menuContainer.appendChild(spaghettiIcon);

    contentBox.appendChild(menuContainer);

}


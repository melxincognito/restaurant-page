
import Icon from './wing.png';
import Foto from './sammich.png';
import Burrito from './burrito.png'
import Croquetas from './croquetas.png';
import Pizza from './pizza.png'
import Spaghetti from './icon.png'



function makeMenuItem(src, text, price) {

    const description = document.createElement('div');
    const food = document.createElement('div');
    const img = document.createElement('img');
    const foodName = document.createElement('h3');
    const foodPrice = document.createElement('h2');

    food.classList.add('food');
    description.classList.add('description');
    img.setAttribute('src', src);
   
    foodName.textContent = text;
    foodPrice.textContent = price;
    
  
    description.appendChild(foodName);
    description.appendChild(foodPrice);
    food.appendChild(img);
    food.appendChild(description);

    return food;
  }




export default function carta() {
    const contentBox = document.getElementById('textContent')
    var menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');


    var alitas = makeMenuItem(Icon, 'Alitas', '€10');
    var hamburguesa = makeMenuItem(Foto, 'Hamburguesa de Pollo', '€15');
    var burrito = makeMenuItem(Burrito, 'Burrito de Carne Asada', '€20' )
    var croquetas = makeMenuItem(Croquetas, 'Croquetas de espinacass con salsa', '€10');
    var pizza = makeMenuItem(Pizza, 'Pizza con setas, cebolla y aceitunas');
    var spaghetti = makeMenuItem(Spaghetti, 'Spaghetti bolganesa en salsa marinara', '€15');

    
    menuContainer.appendChild(alitas);
    menuContainer.appendChild(hamburguesa);
    menuContainer.appendChild(burrito);
    menuContainer.appendChild(croquetas);
    menuContainer.appendChild(pizza);
    menuContainer.appendChild(spaghetti);

    contentBox.appendChild(menuContainer);


}



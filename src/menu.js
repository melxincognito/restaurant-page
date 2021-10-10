
export default function carta() {
    const menuContainer = document.createElement('div');
    const alitas = document.createElement('div');
    const hamburgesa = document.createElement('div');

    menuContainer.classList.add('menuContainer');

    alitas.innerHTML = "Alitas: Nuestras alitas de 'pollo' hecho con yaka y canela";
    hamburgesa.innerHTML = "Hamburgesa de pollo: Hamburguesa de pollo frito con lechuga, tomate, cebolla, aguacate y nuestra salsa secreta";


    menuContainer.appendChild(alitas);
    menuContainer.appendChild(hamburgesa);
    document.body.appendChild(menuContainer);


}


import './style.css';
import Icon from './icon.png';


function header() {
    const horario = document.getElementById('horario')
    const header = document.createElement('div');
    const greeting = document.createElement('div');

    horario.classList.add('content');
    header.innerHTML = "Puta Mel's Veggie Kitchen";
    greeting.innerHTML = "All our food is 100% Fresh with plenty of plant-based options";
    

    horario.appendChild(header);
    horario.appendChild(greeting);

    return horario;
    
}

function horarios() {
    const semana = document.createElement('div');
    const finde = document.createElement('div');

    semana.innerHTML = 'Lunes - Jueves: 13:00 - 23:00';
    finde.innerHTML = 'Viernes - Domingo: 14:00 - 1:00';

    horario.appendChild(semana)
    horario.appendChild(finde)

}

function carta() {
    const alitas = document.createElement('div');
    const hamburgesa = document.createElement('div');

    alitas.innerHTML = "Alitas: Nuestras alitas de 'pollo' hecho con yaka y canela";
    hamburgesa.innerHTML = "Hamburgesa de pollo: Hamburguesa de pollo frito con lechuga, tomate, cebolla, aguacate y nuestra salsa secreta";

    horario.appendChild(alitas);
    horario.appendChild(hamburgesa);
}

function imagen() {

    const myIcon = new Image();
    myIcon.src = Icon;
  
    horario.appendChild(myIcon);

}

header();
horarios();
carta();
imagen();




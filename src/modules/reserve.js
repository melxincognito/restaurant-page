


function location() {
    const locationContainer = document.createElement('div');

    const address = document.createElement('h2')
    
    address.innerHTML = 'Carrer de America 1 Barcelona, Espana'

    locationContainer.appendChild(address);

    return locationContainer 


}



export default function horarios() {

    var contentBox = document.getElementById('textContent')

    const ubicacion = location()

    const horariosContainer = document.createElement('div');
    const semana = document.createElement('div');
    const semanaHorarios = document.createElement('div');
    const finde = document.createElement('div');
    const findeHorarios = document.createElement('div');

    horariosContainer.classList.add('horariosContainer')
    

    semana.innerHTML = 'Lunes - Jueves: ';
    semanaHorarios.innerHTML = "Comida: 13:00 - 16:30 | Cena: 20:00 - 23:00";
    finde.innerHTML = 'Viernes - Domingo: ';
    findeHorarios.innerHTML = "Comida: 12:00 - 16:30 | Cena: 20:00 - 1:00"

    semana.appendChild(semanaHorarios);
    finde.appendChild(findeHorarios);
    horariosContainer.appendChild(semana);
    horariosContainer.appendChild(finde);
    

    contentBox.appendChild(horariosContainer);
    contentBox.appendChild(ubicacion);
    
    
    return contentBox;

}












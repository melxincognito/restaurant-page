import Icon from './icon.png';

export default function imagen() {

    const contentBox = document.getElementById('textContent');
    const myIcon = new Image();
    myIcon.src = Icon;

    contentBox.appendChild(myIcon);
  

}


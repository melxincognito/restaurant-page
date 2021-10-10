import Icon from './icon.png';

export default function imagen() {
    const myIcon = new Image();
    myIcon.src = Icon;
  
    document.body.appendChild(myIcon);

}


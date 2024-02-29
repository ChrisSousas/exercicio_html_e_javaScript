function myfunON() {
    document.getElementById('bulb').src = 'lampada-acesa.png';
    document.body.classList.remove('dark-mode');
}

function myfunOff() {
    document.getElementById('bulb').src = 'lampada-apagada.png';
    document.body.classList.add('dark-mode');

}

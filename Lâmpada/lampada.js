const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

function islampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}
function lampOn() {
    if (!islampBroken()) {
    lamp.src = './imagem/lampada_acesa.jpg'
    }
}
function lampOff () {
    if (!islampBroken ()) {
    lamp.src = './imagem/lampada_apagada.jpg'
    }
}
function lampBroken () {
    lamp.src = './imagem/lampada_quebrada.jpg'
}

turnOn.addEventListener ('click', lampOn)
turnOff.addEventListener ('click', lampOff)
lamp.addEventListener ('dblclick', lampBroken)
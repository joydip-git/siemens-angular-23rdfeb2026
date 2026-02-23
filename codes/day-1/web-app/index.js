function callMe() {
    window.alert('welcome...')
}
/*
function attachHandlerWithButton() {
    var button = document.getElementById('btnClick')

button.addEventListener('click', callMe)
}

window.addEventListener('DOMContentLoaded',attachHandlerWithButton)

//button.onclick=call*/
var button = document.getElementById('btnClick')

button.addEventListener('click', callMe)


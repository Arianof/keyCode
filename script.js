let h1Elem = document.querySelector('h1');
let loc = document.getElementById('keyLocationInner')
let keyCode = document.getElementById('keyCodeInner')
let eventWhich = document.getElementById('keyWhichInner')
let eventCode = document.getElementById('keyEventCodeInner')
window.addEventListener('keydown' , function(event){
h1Elem.innerHTML = event.keyCode
loc.innerHTML = event.location
eventWhich.innerHTML = event.which
eventCode.innerHTML = event.code
keyCode.innerHTML = event.key
})
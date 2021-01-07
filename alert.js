const boton = document.querySelector ('# boton');
const menu = document.querySelector ('# menú');
 
boton.addEventListener ('clic', () => {
    console.log ('clic')
    menu.classList.toggle ('oculto')
})
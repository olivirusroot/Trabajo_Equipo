/*const btnAbrircarrito =
document.querySelector("#btn-abrir-carrito");
const btnCerrarcarrito = 
document.querySelector("#btn-cerrar-carrito");
const carrito = 
document.querySelector("#carrito");

btnAbrircarrito.addEventListener("click",()=>{
    carrito.showModal();
    carrito.classList.add('desenfocado');
})

btnCerrarcarrito.addEventListener("click",()=>{
    carrito.close();
}) */

// Selecciona el dialog y el botón de cerrar
let dialog = document.getElementById('carrito');
let closeButton = document.getElementById('btn-cerrar-carrito');

// Contenedor principal que quieres desenfocar
let mainContent = document.querySelector('main');

// Función para cerrar el dialog y restaurar el estilo original
closeButton.addEventListener('click', function() {
    dialog.close();
    mainContent.classList.remove('desenfocado');
});

// Si tienes un botón para abrir el dialog, también puedes agregar esta funcionalidad:
let openButton = document.getElementById('btn-abrir-carrito'); // Asume que tienes un botón con este id
openButton.addEventListener('click', function() {
    dialog.showModal();
    mainContent.classList.add('desenfocado');
});


let contador = 0
const contadorproductoselement = document.querySelector(".contador-productos")
const contadorelement = document.querySelector(".contador")
const sumarbutton = document.querySelector(".sumar")
const restarbutton = document.querySelector(".restar")
let total = 62500
function sumar(){ 
    contador = contador +1
    contadorproductoselement.innerHTML = contador + " Kilos"
    contadorelement.innerHTML = total * contador
}
console.log(contadorelement)
function restar(){
    contador = contador -1
    contadorproductoselement.innerHTML = contador + " Kilos"
    contadorelement.innerHTML = total * contador
}



sumarbutton.addEventListener("click", sumar);
restarbutton.addEventListener("click",restar);
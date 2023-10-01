/*--------PopUp#1--------*/
const open = document.querySelector('#open');
const modal_container = document.getElementById('modal_container');
const close = document.querySelector('#close');
const closeOutside = document.querySelector("#modal_container")
let tiempoEspera = 400;
let timer;

function iniciarTemporizador(e) {

  timer = setTimeout(function () {
    modal_container.classList.add('show');
  }, tiempoEspera);
}

function reiniciarTemporizador(e) {
  clearTimeout(timer);
}

function cerrar(e) {
  modal_container.classList.remove('show');
}
function cerrarOutside(e) {
  if (e.target === modal_container){ 
    modal_container.classList.remove('show');
   } 
  
}

open.addEventListener('mouseenter', iniciarTemporizador);
open.addEventListener('mouseleave', reiniciarTemporizador);
close.addEventListener('click', cerrar);
closeOutside.addEventListener("click", cerrarOutside)

/*--------PopUp#2--------*/
const openone = document.querySelector('#correaErgonomica');
const modal_container1 = document.getElementById('modal_container1');
const close1 = document.querySelector('#close1');
const closeOutside1 = document.querySelector("#modal_container1")
let tiempoEspera1 = 400;
let timer1;

function iniciarTemporizador1(e) {
  timer1 = setTimeout(function () {
    modal_container1.classList.add('show');
  }, tiempoEspera1);
}

function reiniciarTemporizador1() {
  clearTimeout(timer1);
}

function cerrar1() {
  modal_container1.classList.remove('show');
}

function cerrarOutside1(e) {
  if (e.target === modal_container1 ) {
    modal_container1.classList.remove('show');
  }
}

openone.addEventListener('mouseenter', iniciarTemporizador1);
openone.addEventListener('mouseleave', reiniciarTemporizador1);
close1.addEventListener('click', cerrar1);
closeOutside1.addEventListener("click", cerrarOutside1);

/*--------PopUp#3--------*/
const opensecond = document.querySelector('#juegeteInteractivo');
const modal_container2 = document.getElementById('modal_container2');
const close2 = document.querySelector('#close2');
const closeOutside2 = document.querySelector("#modal_container2")
let tiempoEspera2 = 400;
let timer2;

function iniciarTemporizador2(e) {
  timer2 = setTimeout(function () {
    modal_container2.classList.add('show');
  }, tiempoEspera2);
}

function reiniciarTemporizador2() {
  clearTimeout(timer2);
}

function cerrar2() {
  modal_container2.classList.remove('show');
}

function cerrarOutside2(e) {
  if (e.target === modal_container2 ) {
    modal_container2.classList.remove('show');
  }
}

opensecond.addEventListener('mouseenter', iniciarTemporizador2);
opensecond.addEventListener('mouseleave', reiniciarTemporizador2);
close2.addEventListener('click', cerrar2);
closeOutside2.addEventListener("click", cerrarOutside2);

/*--------PopUp#4--------*/
const openthird = document.querySelector('#cama');
const modal_container3 = document.getElementById('modal_container3');
const close3 = document.querySelector('#close3');
const closeOutside3 = document.querySelector("#modal_container3")
let tiempoEspera3 = 400;
let timer3;

function iniciarTemporizador3(e) {
  timer3 = setTimeout(function () {
    modal_container3.classList.add('show');
  }, tiempoEspera3);
}

function reiniciarTemporizador3() {
  clearTimeout(timer3);
}

function cerrar3() {
  modal_container3.classList.remove('show');
}

function betacerrarOutside3(e) {
  if (e.target === modal_container3 ) {
    modal_container3.classList.remove('show');
  }
}

openthird.addEventListener('mouseenter', iniciarTemporizador3);
openthird.addEventListener('mouseleave', reiniciarTemporizador3);
close3.addEventListener('click', cerrar3);
closeOutside3.addEventListener("click", betacerrarOutside3);
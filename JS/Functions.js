/*--------PopUp#1--------*/

const open = document.querySelector('#open');
const openbutton = document.querySelector('#openButton');
const modal_container = document.getElementById('modal_container');
const close = document.querySelector('#close');
const closeOutside = document.querySelector("#modal_container")
let tiempoEspera = 400;
let timer;

function openButton(){
  modal_container.classList.add('show');
}

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
openbutton.addEventListener('click', openButton);
close.addEventListener('click', cerrar);
closeOutside.addEventListener("click", cerrarOutside)

/*--------Precio-Estimado-1-----*/

let cantidadSuma = 0 
let cantidad = 0 
let resultadoCantidad = document.querySelector("#outputNum")
let inputDir = document.querySelector("#inputNum")
let ButtonSuma = document.querySelector("#ButtonSuma")
let ButtonResta = document.querySelector("#ButtonResta")

function suma(e,) { 

  if (cantidadSuma >= 0){}
  cantidadSuma += 1;

  resultadoCantidad.textContent = cantidadSuma + " Items = $" + cantidadSuma * 15 + " USD";

}


function resta(e) {

  if (cantidadSuma >= 1){ 
    cantidadSuma -= 1;
    resultadoCantidad.textContent = cantidadSuma + " Items = $" + cantidadSuma * 15 + " USD";
  
  }else  { 
    resultadoCantidad.textContent = "$$$"
  }
  

}
  

function contador(e) {
  let inputDir = document.querySelector("#inputNum")
  let valorInput = parseFloat(inputDir.value);

  if (valorInput >= 1 ){ 
      cantidad = (valorInput) +(" ")+("Items") +(" ") +  "=" +(" ")+("$")+[(valorInput)*(15)+(" ")+("USD")]
      resultadoCantidad.textContent = cantidad
  
  } else { 
    resultadoCantidad.textContent = "$$$"
  }
  
}
inputDir.addEventListener("input",contador);
ButtonSuma.addEventListener("click", suma);
ButtonResta.addEventListener("click", resta);

/*-----------PopUp#---2--------*/

const openone = document.querySelector('#correaErgonomica');
const openbutton1 = document.querySelector('#openButton1');
const modal_container1 = document.getElementById('modal_container1');
const close1 = document.querySelector('#close1');
const closeOutside1 = document.querySelector("#modal_container1")
let tiempoEspera1 = 400;
let timer1;

function openButton1(){
  modal_container1.classList.add('show');
}

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
openbutton1.addEventListener('click',openButton1 );
close1.addEventListener('click', cerrar1);
closeOutside1.addEventListener("click", cerrarOutside1);

/*--------Precio-Estimado-2------*/

let cantidadSuma1 = 0 
let cantidad1 = 0 
let resultadoCantidad1 = document.querySelector("#outputNum1")
let inputDir1 = document.querySelector("#inputNum1")
let ButtonSuma1 = document.querySelector("#ButtonSuma1")
let ButtonResta1 = document.querySelector("#ButtonResta1")

function sumaPopup2(e) {

  cantidadSuma1 += 1;

  resultadoCantidad1.textContent = cantidadSuma1 + " Items = $ " + cantidadSuma1 * 8 + " USD";

  
}

function restaPopup2(e) {

  if (cantidadSuma1 >= 1){ 
    cantidadSuma1 -= 1;
    resultadoCantidad1.textContent = cantidadSuma1 + " Items = $ " + cantidadSuma1 * 8 + " USD";
  
  }else  { 
    resultadoCantidad1.textContent = "$$$"
  }
  

}
  

function contadorPopup2(e) {
  let inputDir1 = document.querySelector("#inputNum1")
  let valorInput1 = parseFloat(inputDir1.value);

  if (valorInput1 >= 1 ){ 
      cantidad1 = (valorInput1) +(" ")+("Items") +(" ") + ("=") +(" ")+("$")+[(valorInput1)*(8)+(" ")+("USD")]
      resultadoCantidad1.textContent = cantidad1
  
  } else { 
    resultadoCantidad1.textContent = "$$$"
  }
  
}
inputDir1.addEventListener("input",contadorPopup2);
ButtonSuma1.addEventListener("click",sumaPopup2 );
ButtonResta1.addEventListener("click", restaPopup2);


/*----------PopUp#--3--------*/

const opensecond = document.querySelector('#juegeteInteractivo');
const openbutton2 = document.querySelector('#openButton2');
const modal_container2 = document.getElementById('modal_container2');
const close2 = document.querySelector('#close2');
const closeOutside2 = document.querySelector("#modal_container2")
let tiempoEspera2 = 400;
let timer2;

function openButton2 (){
  modal_container2.classList.add('show');
}
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
openbutton2.addEventListener("click",openButton2 )
close2.addEventListener('click', cerrar2);
closeOutside2.addEventListener("click", cerrarOutside2);



/*--------Precio-Estimado-3------*/ 

let cantidadSuma2 = 0 
let cantidad2 = 0 
let resultadoCantidad2 = document.querySelector("#outputNum2")
let inputDir2 = document.querySelector("#inputNum2")
let ButtonSuma2 = document.querySelector("#ButtonSuma2")
let ButtonResta2 = document.querySelector("#ButtonResta2")

function sumaPopup3(e) { 

  if (cantidadSuma2 >= 0){}
  cantidadSuma2 += 1;

  resultadoCantidad2.textContent = cantidadSuma2 + " Items = $" + cantidadSuma2 * 12 + " USD";

}


function restaPopup3(e) {

  if (cantidadSuma2 >= 1){ 
    cantidadSuma2 -= 1;
    resultadoCantidad2.textContent = cantidadSuma2 + " Items = $" + cantidadSuma2 * 12 + " USD";
  
  }else  { 
    resultadoCantidad2.textContent = "$$$"
  }
  

}
  

function contadorPopup3(e) {
  let inputDir2 = document.querySelector("#inputNum2")
  let valorInput2 = parseFloat(inputDir2.value);

  if (valorInput2 >= 1 ){ 
      cantidad2 = (valorInput2) +(" ")+("Items") +(" ") + ("=") +(" ")+("$")+[(valorInput2)*(12)+(" ")+("USD")]
      resultadoCantidad2.textContent = cantidad2
  
  } else { 
    resultadoCantidad2.textContent = "$$$"
  }
  
}
inputDir2.addEventListener("input",contadorPopup3);
ButtonSuma2.addEventListener("click",sumaPopup3 );
ButtonResta2.addEventListener("click", restaPopup3);

/*---------------------------*/

/*----------PopUp#4----------*/

const openthird = document.querySelector('#cama');
const openbutton3 = document.querySelector('#openButton3');
const modal_container3 = document.getElementById('modal_container3');
const close3 = document.querySelector('#close3');
const closeOutside3 = document.querySelector("#modal_container3")
let tiempoEspera3 = 400;
let timer3;

function openButton3 (){
  modal_container3.classList.add('show');
}

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
openbutton3.addEventListener('click', openButton3)
close3.addEventListener('click', cerrar3);
closeOutside3.addEventListener("click", betacerrarOutside3);

/*------------------------------*/

/*--------Precio-Estimado-4----*/ 

let cantidadSuma3 = 0 
let cantidad3 = 0 
let resultadoCantidad3 = document.querySelector("#outputNum3")
let inputDir3 = document.querySelector("#inputNum3")
let ButtonSuma3 = document.querySelector("#ButtonSuma3")
let ButtonResta3 = document.querySelector("#ButtonResta3")

function sumaPopup4(e) { 

  if (cantidadSuma3 >= 0){}
  cantidadSuma3 += 1;

  resultadoCantidad3.textContent = cantidadSuma3 + " Items = $" + cantidadSuma3 * 30 + " USD";

}


function restaPopup4(e) {

  if (cantidadSuma3 >= 1){ 
    cantidadSuma3 -= 1;
    resultadoCantidad3.textContent = cantidadSuma3 + " Items = $" + cantidadSuma3 * 30 + " USD";
  
  }else  { 
    resultadoCantidad3.textContent = "$$$"
  }
  

}
  

function contadorPopup4(e) {
  let inputDir3 = document.querySelector("#inputNum3")
  let valorInput3 = parseFloat(inputDir3.value);

  if (valorInput3 >= 1 ){ 
      cantidad3 = (valorInput3) +(" ")+("Items") +(" ") +  "=" +(" ")+("$")+[(valorInput3)*(30)+(" ")+("USD")]
      resultadoCantidad3.textContent = cantidad3
  
  } else { 
    resultadoCantidad3.textContent = "$$$"
  }
  
}
inputDir3.addEventListener("input",contadorPopup4);
ButtonSuma3.addEventListener("click", sumaPopup4);
ButtonResta3.addEventListener("click", restaPopup4);

/*----------------------------*/
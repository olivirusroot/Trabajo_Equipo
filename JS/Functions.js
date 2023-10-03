/*--------Funciones Generales para PopUp--------*/

function toggleModal(modalID, action) {
  const modal = document.getElementById(modalID);
  if (action === "show") {
      modal.classList.add('show');
  } else {
      modal.classList.remove('show');
  }
}

function handleOutsideClick(event, modalID) {
  const modal = document.getElementById(modalID);
  if (event.target === modal) {
      modal.classList.remove('show');
  }
}

/*--------Funciones Generales para Precio-Estimado-----*/

function handleCounter(inputElement, outputElement, unitPrice) {
  const inputValue = parseFloat(inputElement.value);
  if (inputValue >= 1) {
      outputElement.textContent = inputValue + " Items = $" + inputValue * unitPrice + " USD";
  } else {
      outputElement.textContent = "$$$";
  }
}

/*--------Event Listeners y Uso--------*/

// Para el PopUp#1
const open1 = document.querySelector('#openButton');
const modal1 = 'modal_container';
const inputDir1 = document.querySelector("#inputNum");
const outputNum1 = document.querySelector("#outputNum");

open1.addEventListener('click', () => toggleModal(modal1, 'show'));
document.getElementById('modal_container').addEventListener('click', (e) => handleOutsideClick(e, modal1));
inputDir1.addEventListener("input", () => handleCounter(inputDir1, outputNum1, 15));

// Para el PopUp#2
const open2 = document.querySelector('#openButton1');
const modal2 = 'modal_container1';
const inputDir2 = document.querySelector("#inputNum1");
const outputNum2 = document.querySelector("#outputNum1");

open2.addEventListener('click', () => toggleModal(modal2, 'show'));
document.getElementById('modal_container1').addEventListener('click', (e) => handleOutsideClick(e, modal2));
inputDir2.addEventListener("input", () => handleCounter(inputDir2, outputNum2, 8));

// Para el PopUp#3
const open3 = document.querySelector('#openButton2');
const modal3 = 'modal_container2';
const inputDir3 = document.querySelector("#inputNum2");
const outputNum3 = document.querySelector("#outputNum2");

open3.addEventListener('click', () => toggleModal(modal3, 'show'));
document.getElementById('modal_container2').addEventListener('click', (e) => handleOutsideClick(e, modal3));
inputDir3.addEventListener("input", () => handleCounter(inputDir3, outputNum3, 12));

// Para el PopUp#4
const open4 = document.querySelector('#openButton3');
const modal4 = 'modal_container3';
const inputDir4 = document.querySelector("#inputNum3");
const outputNum4 = document.querySelector("#outputNum3");

open4.addEventListener('click', () => toggleModal(modal4, 'show'));
document.getElementById('modal_container3').addEventListener('click', (e) => handleOutsideClick(e, modal4));
inputDir4.addEventListener("input", () => handleCounter(inputDir4, outputNum4, 30));
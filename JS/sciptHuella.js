let Enviar = document.querySelector("#enviar");
let Nombrecl = document.querySelector("#Nombrecl")
let productocl = document.querySelector("#Prodcutocl")
let Fechacl= document.querySelector("#fechacl")
let Reseñacl = document.querySelector("#Reseñacl")
let Puntuacionc1 = document.querySelector("#Puntuacioncl")

    const btnDelete = document.querySelector("#enviar");
    const inputId = document.querySelector("#Reseñacl");
    


    enviar.addEventListener("click", function borrar() {
      inputId.value = "";
      Nombrecl.value = "";
      Fechacl.value = "";
      Puntuacionc1.value= "";
      productocl.value = "";
      

    });

function mostrarFormulario() {
  document.getElementById('comentarios').style.display = 'block';
}

function ocultarFormulario() {
  document.getElementById('comentarios').style.display = 'none';
};



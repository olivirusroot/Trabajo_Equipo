let EnviarMale = document.querySelector("#EnviarMale");
let Nombrecl = document.querySelector("#Nombrecl")
let productocl = document.querySelector("#Prodcutocl")
let Fechacl= document.querySelector("#fechacl")
let Reseñacl = document.querySelector("#Reseñacl")
let Puntuacioncl = document.querySelector("#Puntuacioncl")

    const btnDelete = document.querySelector("#EnviarMale");
    const inputId = document.querySelector("#Reseñacl");
    


    EnviarMale.addEventListener("click", function borrar() {
      inputId.value = "";
      Nombrecl.value = "";
      Fechacl.value = "";
      Puntuacioncl.value= "";
      productocl.value = "";
      

    });

function mostrarFormulario() {
  document.getElementById('comentarios').style.display = 'block';
}

function ocultarFormulario() {
  document.getElementById('comentarios').style.display = 'none';
};



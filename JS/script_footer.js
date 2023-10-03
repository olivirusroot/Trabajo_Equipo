document.getElementById('openModalBtn').addEventListener('click', function() {
  document.getElementById('contactModal').style.display = 'block';
  main_ok.classList.add('desenfocado');
});

document.getElementById('closeModalBtn').addEventListener('click', function() {
  document.getElementById('contactModal').style.display = 'none';
  main_ok.classList.remove('desenfocado');
});

window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('contactModal')) {
    document.getElementById('contactModal').style.display = 'none';
  }
});

function showData() {
  // Obtener los valores del formulario
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Mostrar un alerta con los datos
  alert("Nombre: " + name + "\nEmail: " + email + "\nMensaje: " + message);

  // Evitar que el formulario se envíe (esto previene la recarga de la página)
  return false;
}

nameText = window.document.querySelector("#name-text")
userText = window.document.querySelector("#username-text")
emailText = window.document.querySelector("#email-text")
passwordText = window.document.querySelector("#password-text")
container = window.document.querySelector(".container")
span = document.querySelector("#error_message")
form = document.querySelector("#form-id")

function validateContainer (e){
e.preventDefault();

if(passwordText.value.length < 8 && !emailText.value){
    span.innerHTML = "La contrseña debe de ser mayor a 8 Digitos <br> el correo tiene que ser valido"
    span.className = "container-span_error"
    passwordText.value = ""
} else if(passwordText.value.length < 8){
    span.innerHTML = "La contrseña debe de ser mayor a 8 Digitos"
    span.className = "container-span_error"
} else if (!emailText.value){
    span.innerHTML = "tiene que ser correo valido"
    span.className = "container-span_error"
} 
let name, user, email, pass;

name = document.getElementById("name-text").value;
user = document.getElementById("username-text").value;
email = document.getElementById("email-text").value;
pass = document.getElementById("password-text").value;

if(name == "Petchic" && user == "pet123" && email == "pet@gmail.com" && pass == "12345678"){
    console.log("if esta bien")
    window.location = "index.html";
}

}

container.addEventListener("submit", validateContainer)



/*function login (){
    let name, user, email, pass;

    name = document.getElementById("name-text").value;
    user = document.getElementById("username-text").value;
    email = document.getElementById("email-text").value;
    pass = document.getElementById("password-text").value;

    if(name == "Petchic" && user == "pet123" && email == "pet@gmail.com" && pass == "12345678"){
        console.log("if esta bien")
        window.location = "login.html";
    }
}*/


container.addEventListener("submit", validateContainer)

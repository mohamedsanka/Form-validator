const form = document.querySelector(".form");
const name = document.querySelector(".name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm-password");
const registerBtn = document.querySelector(".register-btn");
const message = document.querySelector(".message");
const msgContainer = document.querySelector("p")


form.addEventListener("submit", processFormData)

let isValid = false;
let passwordMatch = false;

function validateForm(){
isValid = form.checkValidity()
if(!isValid){
message.textContent = "Fill out all fields!"
message.style.color = "red"
msgContainer.style.borderColor = "red"
return;
}

if(password.value === confirmPassword.value){
passwordMatch = true;
password.style.borderColor = "green"
confirmPassword.style.borderColor = "green"
}else{
passwordMatch = false;
message.textContent = "Make sure passwords match"
message.style.color = "red"
msgContainer.style.borderColor = "red"
password.style.borderColor = "red"
confirmPassword.style.borderColor = "red"
return;
}

if(isValid && passwordMatch){
message.textContent = "Successfully Registered!"
message.style.color = "green"
msgContainer.style.borderColor = "green"
}
}


function storeFormData(){
let user = {
name: name.value,
email: email.value,
password: password.value
}
}


function processFormData(e){
e.preventDefault()
validateForm()
if(isValid && passwordMatch){
storeFormData()
}
}

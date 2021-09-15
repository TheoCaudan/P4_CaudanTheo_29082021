function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.querySelector("#reserve");
const confirm = document.querySelector("#formConfirm");
const confirmBtn = document.getElementById("button");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}
// launch confirm modal event
confirmBtn.addEventListener("submit", launchConfirm);
// launch confirm modal form
function launchConfirm() {
  confirm.style.display = "block";
}
// close confirm modal form
function closeConfirm() {
  confirm.style.display = "none";
}
// form validation 
// ================================================//
// firstname validation
var validation = document.getElementById("button");
var firstNameInput = document.getElementById("first");
var firstError = document.querySelector(".firstIsNotValid");
var firstValidity = /^[a-zA-ZéëêèÉîïìíüûúÜâäàåáÅôöòóÖùÿ][a-zéëêèîïìíüûúâäàåáôöòóùÿ]+([-'\s][a-zA-ZéëêèÉîïìíüûúÜâäàåáÅôöòóÖùÿ][a-zéëêèîïìíüûúâäàåáôöòóùÿ]+)?/;
firstNameInput.addEventListener("change", firstValidation);

function firstValidation() {
  if(firstNameInput == "") {
    firstError.textContent = "Veuillez renseigner un prénom comportant au moins 2 caractères.";
    firstError.style.color = "#ff0000";
    return false;
  } else if(firstValidity.test(firstNameInput.value) == false) {
    firstError.textContent = "Format incorrect. (Au moins 2 lettres, pas de chiffres ni caractères spéciaux attendus)";
    firstError.style.color = "#ff0000";
    return false;
  } else {
    firstError.textContent = ""; // reset error
    return true;
  }
}
// lastname validation
var lastNameInput = document.getElementById("last");
var lastError = document.querySelector(".lastIsNotValid");
var lastValidity = /^[a-zA-ZéëêèÉîïìíüûúÜâäàåáÅôöòóÖùÿ][a-zéëêèîïìíüûúâäàåáôöòóùÿ]+([-'\s][a-zA-ZéëêèÉîïìíüûúÜâäàåáÅôöòóÖùÿ][a-zéëêèîïìíüûúâäàåáôöòóùÿ]+)?/;
lastNameInput.addEventListener("change", lastValidation);

function lastValidation() {
  if(lastNameInput == "") {
    lastError.textContent = "Veuillez renseigner un nom comportant au moins 2 caractères.";
    lastError.style.color = "#ff0000";
    return false;
  } else if(lastValidity.test(lastNameInput.value) == false) {
    lastError.textContent = "Format incorrect. (Au moins 2 lettres, pas de chiffres ni caractères spéciaux attendus)";
    lastError.style.color = "#ff0000";
    return false;
  } else {
    lastError.textContent = ""; // reset error
    return true;
  }
}
// email validation
var emailInput = document.getElementById("email");
var emailError = document.querySelector(".emailIsNotValid");
var emailValidity = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
emailInput.addEventListener("change", emailValidation);

function emailValidation() {
  if(emailInput == "") {
    emailError.textContent = "Veuillez renseigner une adresse email.";
    emailError.style.color = "#ff0000";
    return false;
  } else if(emailValidity.test(emailInput.value) == false) {
    emailError.textContent = "Format incorrect. (L'adresse doit contenir au moins un signe @ et un . ex: prenom.nom123@boitemail.fr)"
    emailError.style.color = "#ff0000";
    return false;
  } else {
    emailError.textContent = ""; // reset error
    return true;
  }
}
// birthdate validation
var birthdateInput = document.getElementById("birthdate");
var birthdateError = document.querySelector(".birthdateIsNotValid");
let date = new Date().getFullYear();
birthdateInput.addEventListener("change", birthdateValidation);

function birthdateValidation() {
  let dateTest = parseInt(birthdateInput.value);
  if(birthdateInput == ""){
    birthdateError.textContent = "Veuillez renseigner une date de naissance.";
    birthdateError.style.color = "#ff0000";
  }
  if(dateTest < 1900 || dateTest > date) {
    birthdateError.textContent = "Veuillez renseigner une date de naissance valide.";
    birthdateError.style.color = "#ff0000";
    return false;
  } else {
    birthdateError.textContent = ""; // reset error
    return true;
  }
}
// quantity validation
var quantityInput = document.getElementById("quantity");
var quantityError = document.querySelector(".quantityIsNotValid");
quantityInput.addEventListener("change", quantityValidation);

function quantityValidation() {
  if(quantityInput == "") {
    quantityError.textContent = "Veuillez renseigner un nombre de participation.";
    quantityError.style.color = "#ff0000";
    return false;
  } else if(quantityInput.value < 0 || quantityInput.value >= 100) {
    quantityError.textContent = "Veuillez renseigner un nombre de participation compris entre 0 et 99 inclus.";
    quantityError.style.color = "#ff0000";
    return false;
  } else if(quantityInput.type != "number") {
    quantityError.textContent = "Veuillez entrer une valeur numérique.";
    quantityError.style.color = "#ff0000";
    return false;
  } else {
    quantityError.textContent = ""; // reset error
    return true;
  }
}
// locations validation
var locationsInput1 = document.getElementById("location1");
var locationsInput2 = document.getElementById("location2");
var locationsInput3 = document.getElementById("location3");
var locationsInput4 = document.getElementById("location4");
var locationsInput5 = document.getElementById("location5");
var locationsInput6 = document.getElementById("location6");
var locationsInputAll = document.querySelectorAll(".checkbox-input[type=radio]");
var locationsError = document.querySelector(".locationsIsNotValid");
validation.addEventListener("change", locationsValidation);

function locationsValidation() {
  if(!locationsInput1.checked && !locationsInput2.checked && !locationsInput3.checked && !locationsInput4.checked && !locationsInput5.checked && !locationsInput6.checked && quantityInput.value != 0 ) {
    locationsError.textContent = "Veuillez cocher une ville.";
    locationsError.style.color = "#ff0000";
    return false;
  } else {
    locationsError.textContent = ""; // reset error
    return true;
  }
}
// checkbox1 validation
var checkbox1Input = document.getElementById("checkbox1");
var checkbox1Error = document.querySelector(".checkbox1IsNotValid");
checkbox1Input.addEventListener("change", checkbox1Validation);

function checkbox1Validation() {
  if(!checkbox1Input.checked) {
    checkbox1Error.textContent = "Veuillez accepter les conditions d'utilisation.";
    checkbox1Error.style.color = "#ff0000";
    return false;
  } else {
    checkbox1Error.textContent = ""; // reset error
    return true;
  }
}
// form submission
var formError = document.querySelector(".formIsNotValid");
validation.addEventListener("submit", formSubmission);

function formSubmission(e) {
  e.preventDefault();
  if(firstValidation() && lastValidation() && emailValidation() && birthdateValidation() && quantityValidation() && locationsValidation() && checkbox1Validation()) {
    console.log("Formulaire envoyé.");
  } 
}

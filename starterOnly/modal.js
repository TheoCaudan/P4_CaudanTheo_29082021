function editNav() {
  let x = document.getElementById("myTopnav");
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

// variable to submit only once
let formSent = false;
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launch));
// function launch
function launch() {
  launchModal();
  if(formSent) {
    launchConfirm();
  }
}
// launch modal form
function launchModal() {
  if(!formSent) {
    modalbg.style.display = "block";
  } 
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}
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
let validation = document.getElementById("submitBtn");
let firstNameInput = document.getElementById("first");
let firstError = document.querySelector(".firstIsNotValid");
let firstValidity = /^[a-zA-ZéëêèÉîïìíüûúÜâäàåáÅôöòóÖùÿ][a-zéëêèîïìíüûúâäàåáôöòóùÿ]+([-'\s][a-zA-ZéëêèÉîïìíüûúÜâäàåáÅôöòóÖùÿ][a-zéëêèîïìíüûúâäàåáôöòóùÿ]+)?/;
firstNameInput.addEventListener("change", firstValidation);

function firstValidation() {
  if(firstNameInput == "" || firstNameInput.length < 2) {
    firstError.textContent = "Veuillez renseigner un prénom comportant au moins 2 caractères.";
    firstError.style.color = "#ff0000";
    firstError.style.fontSize = "18px";
    return false;
  } else if(firstValidity.test(firstNameInput.value) == false) {
    firstError.textContent = "Veuillez renseigner un prénom valide. Minimum 2 caractères.";
    firstError.style.color = "#ff0000";
    firstError.style.fontSize = "18px";
    return false;
  } else {
    firstError.textContent = ""; // reset error
    return true;
  }
}
// lastname validation
let lastNameInput = document.getElementById("last");
let lastError = document.querySelector(".lastIsNotValid");
let lastValidity = /^[a-zA-ZéëêèÉîïìíüûúÜâäàåáÅôöòóÖùÿ][a-zéëêèîïìíüûúâäàåáôöòóùÿ]+([-'\s][a-zA-ZéëêèÉîïìíüûúÜâäàåáÅôöòóÖùÿ][a-zéëêèîïìíüûúâäàåáôöòóùÿ]+)?/;
lastNameInput.addEventListener("change", lastValidation);

function lastValidation() {
  if(lastNameInput == "" || lastNameInput.length < 2) {
    lastError.textContent = "Veuillez renseigner un nom comportant au moins 2 caractères.";
    lastError.style.color = "#ff0000";
    lastError.style.fontSize = "18px";
    return false;
  } else if(lastValidity.test(lastNameInput.value) == false) {
    lastError.textContent = "Veuillez renseigner un nom valide. Minimum 2 caractères.";
    lastError.style.color = "#ff0000";
    lastError.style.fontSize = "18px";
    return false;
  } else {
    lastError.textContent = ""; // reset error
    return true;
  }
}
// email validation
let emailInput = document.getElementById("email");
let emailError = document.querySelector(".emailIsNotValid");
let emailValidity = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
emailInput.addEventListener("change", emailValidation);

function emailValidation() {
  if(emailInput == "") {
    emailError.textContent = "Veuillez renseigner une adresse email.";
    emailError.style.color = "#ff0000";
    emailError.style.fontSize = "18px";
    return false;
  } else if(emailValidity.test(emailInput.value) == false) {
    emailError.textContent = "L'adresse est invalide. Format attendu: xxx@xxx.xx"
    emailError.style.color = "#ff0000";
    emailError.style.fontSize = "18px";
    return false;
  } else {
    emailError.textContent = ""; // reset error
    return true;
  }
}
// birthdate validation
let birthdateInput = document.getElementById("birthdate");
let birthdateError = document.querySelector(".birthdateIsNotValid");
let date = new Date().getFullYear();
birthdateInput.addEventListener("change", birthdateValidation);

function birthdateValidation() {
  let parts = birthdateInput.value.split("\-"),
    day = parseInt(parts[2], 10),
    month = parseInt(parts[1], 10),
    year = parseInt(parts[0], 10);
  let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if((year % 100 != 0 && year % 4 == 0) || (year % 100 == 0 && year % 400 == 0)) {
  monthLength[1] = 29;
  }
  if(isNaN(day) || isNaN(month) || isNaN(year)){
    birthdateError.textContent = "Veuillez renseigner une date de naissance valide.";
    birthdateError.style.color = "#ff0000";
    birthdateError.style.fontSize = "18px";
    return false;
  }
  if(year < 1900 || year > date || day <= 0 || day > monthLength[month - 1] || month <= 0 || month > 12){
    birthdateError.textContent = "Veuillez renseigner une date de naissance valide.";
    birthdateError.style.color = "#ff0000";
    birthdateError.style.fontSize = "18px";
    return false;
  } else {
    birthdateError.textContent = ""; // reset error
    return true;
  }
}
// quantity validation
let quantityInput = document.getElementById("quantity");
let quantityError = document.querySelector(".quantityIsNotValid");
quantityInput.addEventListener("change", quantityValidation);

function quantityValidation() {
  let quantityTest = parseInt(quantityInput.value);
  if(isNaN(quantityTest)) {
    quantityError.textContent = "Veuillez renseigner un nombre de participation.";
    quantityError.style.color = "#ff0000";
    quantityError.style.fontSize = "18px";
    return false;
  } else if(quantityTest < 0 || quantityTest >= 100) {
    quantityError.textContent = "Valeur attendue comprise entre 0 et 99 inclus.";
    quantityError.style.color = "#ff0000";
    quantityError.style.fontSize = "18px";
    return false;
  } else {
    quantityError.textContent = ""; // reset error
    return true;
  }
}
// locations validation
let locationsInput1 = document.getElementById("location1");
let locationsInput2 = document.getElementById("location2");
let locationsInput3 = document.getElementById("location3");
let locationsInput4 = document.getElementById("location4");
let locationsInput5 = document.getElementById("location5");
let locationsInput6 = document.getElementById("location6");
let locationsInputAll = document.querySelectorAll(".checkbox-input[type=radio]");
let locationsError = document.querySelector(".locationsIsNotValid");
let towns = document.getElementById("towns");
towns.addEventListener("change", locationsValidation);

function locationsValidation() {
  if(!locationsInput1.checked && !locationsInput2.checked && !locationsInput3.checked && !locationsInput4.checked && !locationsInput5.checked && !locationsInput6.checked) {
    locationsError.textContent = "Veuillez cocher une ville.";
    locationsError.style.color = "#ff0000";
    locationsError.style.fontSize = "18px";
    return false;
  } else {
    locationsError.textContent = ""; // reset error
    return true;
  }
}
// checkbox1 validation
let checkbox1Input = document.getElementById("checkbox1");
let checkbox1Error = document.querySelector(".checkbox1IsNotValid");
checkbox1Input.addEventListener("change", checkbox1Validation);

function checkbox1Validation() {
  if(!checkbox1Input.checked) {
    checkbox1Error.textContent = "Veuillez accepter les conditions d'utilisation.";
    checkbox1Error.style.color = "#ff0000";
    checkbox1Error.style.fontSize = "18px";
    return false;
  } else {
    checkbox1Error.textContent = ""; // reset error
    return true;
  }
}
// form submission
let formError = document.querySelector(".formIsNotValid");
form.addEventListener("submit", formSubmission); 



function formSubmission(e) {
  e.preventDefault();
  if(firstValidation() && lastValidation() && emailValidation() && birthdateValidation() && quantityValidation() && locationsValidation() && checkbox1Validation() && !formSent) {
    console.log("Formulaire envoyé.");
    formSent = true;
    launchConfirm();
    closeModal();
  }
}

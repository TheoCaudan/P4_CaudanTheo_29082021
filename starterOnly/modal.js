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
confirmBtn.addEventListener("click", launchConfirm);
// launch confirm modal form
function launchConfirm() {
  if(formValid) {
    confirm.style.display = "block";
  }
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
validation.addEventListener("click", firstValidation);

function firstValidation(e) {
  if(firstNameInput.validity.valueMissing) {
    e.preventDefault();
    firstError.textContent = "Veuillez renseigner un prénom comportant au moins 2 caractères.";
    firstError.style.color = "#ff0000";
    return false;
  } else if(firstValidity.test(firstNameInput.value) == false) {
    e.preventDefault();
    firstError.textContent = "Format incorrect. (Au moins 2 lettres, pas de chiffres ni caractères spéciaux attendus)";
    firstError.style.color = "#ff0000";
    return false;
  } else {
    //firstError.textContent = "";
    return true;
  }
}
// lastname validation
var lastNameInput = document.getElementById("last");
var lastError = document.querySelector(".lastIsNotValid");
var lastValidity = /^[a-zA-ZéëêèÉîïìíüûúÜâäàåáÅôöòóÖùÿ][a-zéëêèîïìíüûúâäàåáôöòóùÿ]+([-'\s][a-zA-ZéëêèÉîïìíüûúÜâäàåáÅôöòóÖùÿ][a-zéëêèîïìíüûúâäàåáôöòóùÿ]+)?/;
validation.addEventListener("click", lastValidation);

function lastValidation(e) {
  if(lastNameInput.validity.valueMissing) {
    e.preventDefault();
    lastError.textContent = "Veuillez renseigner un nom comportant au moins 2 caractères.";
    lastError.style.color = "#ff0000";
    return false;
  } else if(lastValidity.test(lastNameInput.value) == false) {
    e.preventDefault();
    lastError.textContent = "Format incorrect. (Au moins 2 lettres, pas de chiffres ni caractères spéciaux attendus)";
    lastError.style.color = "#ff0000";
    return false;
  } else {
    //lastError.textContent = "";
    return true;
  }
}
// email validation
var emailInput = document.getElementById("email");
var emailError = document.querySelector(".emailIsNotValid");
var emailValidity = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
validation.addEventListener("click", emailValidation);

function emailValidation(e) {
  if(emailInput.validity.valueMissing) {
    e.preventDefault();
    emailError.textContent = "Veuillez renseigner une adresse email.";
    emailError.style.color = "#ff0000";
    return false;
  } else if(emailValidity.test(emailInput.value) == false) {
    e.preventDefault();
    emailError.textContent = "Format incorrect. (L'adresse doit contenir au moins un signe @ et un . ex: prenom.nom123@boitemail.fr)"
    emailError.style.color = "#ff0000";
    return false;
  } else {
    //emailError.textContent = "";
    return true;
  }
}
// birthdate validation
var birthdateInput = document.getElementById("birthdate");
var birthdateError = document.querySelector(".birthdateIsNotValid");
var birthdateValidity = /^\d{2}\/\d{2}\/\d{4}$/m;
var parts = birthdateInput.value.split("\/"),
    day = parseInt(parts[0], 10),
    month = parseInt(parts[1], 10),
    year = parseInt(parts[2], 10);
let date = new Date().getFullYear();
var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
if((year % 100 != 0 && year % 4 == 0) || (year % 100 == 0 && year % 400 == 0)) {
  monthLength[1] = 29;
}
validation.addEventListener("click", birthdateValidation);

function birthdateValidation(e) {
  if(birthdateInput.validity.valueMissing) {
    e.preventDefault();
    birthdateError.textContent = "Veuillez renseigner une date de naissance.";
    birthdateError.style.color = "#ff0000";
    return false;
  } else if(birthdateValidity.test(birthdateInput.value) == false) {
    e.preventDefault();
    birthdateError.textContent = "Format incorrect. (La date doit être au format JJ/MM/AAAA)";
    birthdateError.style.color = "#ff0000";
    return false;
  } else if(year < 1900 || year > date || month == 0 || month > 12) {
    e.preventDefault();
    birthdateError.textContent = "Veuillez renseigner une date de naissance valide. (Vérifiez le mois et l'année)";
    birthdateError.style.color = "#ff0000";
    return false;
  } else if(day <= 0 || day > monthLength[month - 1]) {
    e.preventDefault();
    birthdateError.textContent = "Veuillez renseigner une date de naissance valide."
    birthdateError.style.color = "#ff0000";
    return false;
  } else {
    //birthdateError.textContent = "";
    return true;
  }
}
// quantity validation
var quantityInput = document.getElementById("quantity");
var quantityError = document.querySelector(".quantityIsNotValid");
validation.addEventListener("click", quantityValidation);

function quantityValidation(e) {
  if(quantityInput.validity.valueMissing) {
    e.preventDefault();
    quantityError.textContent = "Veuillez renseigner un nombre de participation.";
    quantityError.style.color = "#ff0000";
    return false;
  } else if(quantityInput.value < 0 || quantityInput.value >= 100) {
    e.preventDefault();
    quantityError.textContent = "Veuillez renseigner un nombre de participation compris entre 0 et 99 inclus.";
    quantityError.style.color = "#ff0000";
    return false;
  } else if(quantityInput.type != "number") {
    e.preventDefault();
    quantityError.textContent = "Veuillez entrer une valeur numérique.";
    quantityError.style.color = "#ff0000";
    return false;
  } else {
    //quantityError.textContent = "";
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
var locationsError = document.querySelector(".locationsIsNotValid");
validation.addEventListener("click", locationsValidation);

function locationsValidation(e) {
  if(!locationsInput1.checked && !locationsInput2.checked && !locationsInput3.checked && !locationsInput4.checked && !locationsInput5.checked && !locationsInput6.checked && quantityInput.value != 0 ) {
    e.preventDefault();
    locationsError.textContent = "Veuillez cocher une ville.";
    locationsError.style.color = "#ff0000";
    return false;
  } else {
    //locationsError.textContent = "";
    return true;
  }
}
// checkbox1 validation
var checkbox1Input = document.getElementById("checkbox1");
var checkbox1Error = document.querySelector(".checkbox1IsNotValid");
validation.addEventListener("click", checkbox1Validation);

function checkbox1Validation(e) {
  if(!checkbox1Input.checked) {
    e.preventDefault();
    checkbox1Error.textContent = "Veuillez accepter les conditions d'utilisation.";
    checkbox1Error.style.color = "#ff0000";
    return false;
  } else {
    //checkbox1Error.textContent = "";
    return true;
  }
}
// whole validation
var firstValid = firstValidation();
var lastValid = lastValidation();
var emailValid = emailValidation();
var birthdateValid = birthdateValidation();
var quantityValid = quantityValidation();
var locationsValid = locationsValidation();
var checkbox1Valid = checkbox1Validation();
var formError = document.querySelector(".formIsNotValid");
validation.addEventListener("click", formValidation);

function formValidation(e) {
  if(!firstValid) {
    e.preventDefault();
    formError.textContent = "Veuillez revérifier les champs du formulaire.";
    formError.style.color = "#ff0000";
  } else if (!lastValid) {
    e.preventDefault();
    formError.textContent = "Veuillez revérifier les champs du formulaire.";
    formError.style.color = "#ff0000";
  } else if(!emailValid) {
    e.preventDefault();
    formError.textContent = "Veuillez revérifier les champs du formulaire.";
    formError.style.color = "#ff0000";
  } else if(!birthdateValid) {
    e.preventDefault();
    formError.textContent = "Veuillez revérifier les champs du formulaire.";
    formError.style.color = "#ff0000";
  } else if(!quantityValid) {
    e.preventDefault();
    formError.textContent = "Veuillez revérifier les champs du formulaire.";
    formError.style.color = "#ff0000";
  } else if(!locationsValid) {
    e.preventDefault();
    formError.textContent = "Veuillez revérifier les champs du formulaire.";
    formError.style.color = "#ff0000";
  } else if(!checkbox1Valid) {
    e.preventDefault();
    formError.textContent = "Veuillez revérifier les champs du formulaire.";
    formError.style.color = "#ff0000";
  } else {
    //resetError();
    closeModal();
    return true;
  }
}
// ***===== A REVOIR =====*** //

// remove errors after test done
function resetError() {
  var error = document.querySelectorAll(".error");
  var parent = document.querySelectorAll(".formData");

  parent.removeChild(error);
}

// ***===== A REVOIR =====*** //

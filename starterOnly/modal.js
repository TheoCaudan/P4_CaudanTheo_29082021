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
const form = document.querySelector("form");
const firstNameInput = document.getElementById("first"),
      lastNameInput = document.getElementById("last"),
      emailInput = document.getElementById("email"),
      birthdateInput = document.getElementById("birthdate"),
      quantityInput = document.getElementById("quantity"),
      locationsInput = document.querySelectorAll(".checkbox-input[type=radio]"),
      checkbox1Input = document.getElementById("checkbox1");
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
// errorMessages
const errorMessages = {
  firstName: "Veuillez renseigner un prénom comportant au moins 2 caractères.",
  lastName: "Veuillez renseigner un nom comportant au moins 2 caractères.",
  email: "Veuillez renseigner une adresse email valide.",
  birthdate: "Veuillez renseigner une date de naissance valide au format JJ/MM/AAAA.",
  quantity: "Veuillez renseigner un nombre de participation valide (supérieur ou égal à zéro).",
  locations: "Veuillez choisir une ville.",
  checkbox1: "Veuillez cocher la case \"J'ai lu et accepté les conditions d'utilisation.\"."
};
// invalid alert
function isInvalid(element, message) {
    let invalidAlert = document.createElement("div");
    invalidAlert.classList.add("form-alert");
    let br = document.createElement("br");
    invalidAlert.innerHTML = message;
    if(element !== locationsInput) {
      element.parentElement.append(invalidAlert);
      element.parentElement.append(br);
    } else {
      element[0].parentElement.append(invalidAlert);
      element[0].parentElement.append(br);
    }
  }
// remove alerts from the past
function removeAlerts() {
  let alertBoxes = document.getElementsByClassName("form-alert");
  if(alertBoxes.length > 0) {
    invalidAlert.innerHTML = "";
  }
}
// validate data in form

// validate first name
function firstValidation() {
  let inputValue = document.getElementById("first").value;
  if(inputValue !== null && inputValue.length > 1) {
    return true;
  } else {
    return false;
  }
}
// validate last name
function lastValidation() {
  let inputValue = document.getElementById("last").value;
  if(inputValue !== null && inputValue.length > 1) {
    return true;
  } else {
    return false;
  }
}
// validate email address
function emailValidation() {
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let inputValue = document.getElementById("email").value;
  if(regex.test(inputValue) != true) {
    return regex.test(inputValue);
  }
  return regex.test(inputValue);
}
// validate birthdate
function birthdateValidation() {
// check format
  let regex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!regex.test(birthdate) || date == "") {
    return false;
  } else
// convert date parts to integers
  var parts = birthdate.split("/"),
      day = parseInt(parts[0], 10),
      month = parseInt(parts[1], 10),
      year = parseInt(parts[2], 10);
// check the range of year and month
  let date =  new Date().getFullYear();
  if(year < 1900 || year > date || month == 0 || month > 12) {
    return false;
  } else 
// set the leap years case
  var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if((year % 100 != 0 && year % 4 == 0) || (year % 100 == 0 && year % 400 == 0)) {
    monthLength[1] = 29;
  }
// check the range of day
  return day > 0 && day <= monthLength[month - 1];
}
// validate quantity
function quantityValidation() {
  let inputValue = document.getElementById("quantity");
  if(inputValue.value >= 0 && inputValue.type == "number" && inputValue.value < 100) {
    return true;
  } else {
    return false;
  }
}
//validate location
function locationsValidation() {
  const location1 = document.getElementById("location1"),
      location2 = document.getElementById("location2"),
      location3 = document.getElementById("location3"),
      location4 = document.getElementById("location4"),
      location5 = document.getElementById("location5"),
      location6 = document.getElementById("location6");
  if(!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && location6.checked) {
    return false;
  } else {
    return true;
  }
}
//validate checkbox1
function checkbox1Validation() {
  let inputValue = document.getElementById("checkbox1").checked;
  if(inputValue != true) {
    return false;
  } else {
    return true;
  }
}
// validate form
function validation(event) {
  let isValid = true;
  removeAlerts();
  if(firstValidation() != true) {
    isValid = false;
    isInvalid(firstNameInput, errorMessages.firstName);
  } if(lastValidation() != true) {
    isValid = false;
    isInvalid(lastNameInput, errorMessages.lastName);
  } if(emailValidation() != true) {
    isValid = false;
    isInvalid(emailInput, errorMessages.email);
  } if(birthdateValidation() != true) {
    isValid = false;
    isInvalid(birthdateInput, errorMessages.birthdate);
  } if(quantityValidation() != true) {
    isValid = false;
    isInvalid(quantityInput, errorMessages.quantity);
  } if(locationsValidation() != true) {
    isValid = false;
    isInvalid(locationsInput, errorMessages.locations);
  } if(checkbox1Validation() != true) {
    isValid = false;
    isInvalid(checkbox1Input, errorMessages.checkbox1);
  } if(isValid == true) {
    form.submit();
    modalbg.style.display = "none";
    document.querySelector(".formConfirm").style.display = "block";
  } else {
    event.preventDefault();
  }
}

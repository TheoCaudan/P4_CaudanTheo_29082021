function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

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

// validate data in form

// validate first name
function firstValidation() {
  let inputValue = document.getElementById("first").value;
  if(inputValue !== null && inputValue.length > 2) {
    return true;
  } else {
    alert("Veuillez indiquer un prénom")
    return false;
  }
}

// validate last name
function lastValidation() {
  let inputValue = document.getElementById("last").value;
  if(inputValue !== null && inputValue.length > 2) {
    return true;
  } else {
    alert("Veuillez indiquer un nom");
    return false;
  }
}

// validate email address
function emailValidation() {
  let regex = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;
  let inputValue = document.getElementById("email").value;
  if(inputValue != true) {
    alert("Veuillez indiquer une adresse email valide");
    return regex.test(inputValue);
  }
  return regex.test(inputValue);
}

// validate birthdate
function birthdateValidation() {
  let regex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
  let inputValue = document.getElementById("birthdate").value;
  if (inputValue != true) {
    alert("Veuillez indiquer une date de naissance valide");
    return regex.test(inputValue);
  } else {
    return regex.test(inputValue);
  }
}

// validate quantity
function quantityValidation() {
  let inputValue = document.getElementById("quantity").type;
  if(inputValue >= 0 && inputValue.type == "number") {
    return true;
  } else {
    alert("Veuillez indiquer le nombre de tournois auxquels vous avez participés")
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
    alert("Veuillez choisir une ville où vous avez participé à un tournoi");
    return false;
  } else {
    return true;
  }
}

// validate form
formData.addEventListener("submit", e => {
  e.preventDefault();
})

function validation() {
  if(firstValidation() != true || lastValidation() != true || emailValidation() != true || birthdateValidation() != true || quantityValidation() != true || locationsValidation() != true) {
    alert("Veuillez vérifier les champs et cases à cocher avant de renvoyer le formulaire");
    return false;
  }
}
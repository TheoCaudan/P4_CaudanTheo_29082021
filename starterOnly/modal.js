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
  let regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let inputValue = document.getElementById("email").value;
  if(inputValue != true) {
    alert("Veuillez indiquer une adresse email valide");
    return regex.test(inputValue);
  }
  return regex.test(inputValue);
}

// validate birthdate
function birthdateValidation() {
  let regex = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g;
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
form.addEventListener("submit", e => {
  e.preventDefault();
})

function validation() {
  if(firstValidation() != true || lastValidation() != true || emailValidation() != true || birthdateValidation() != true || quantityValidation() != true || locationsValidation() != true) {
    alert("Veuillez vérifier les champs et cases à cocher avant de renvoyer le formulaire");
    return false;
  }
}
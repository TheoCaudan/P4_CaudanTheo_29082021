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


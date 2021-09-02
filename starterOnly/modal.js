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
  let regex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
  if (!regex.test(birthdate) || date == "") {
    return false;
  }
// convert date parts to integers
  var parts = birthdate.split("/"),
      day = parseInt(parts[0], 10),
      month = parseInt(parts[1], 10),
      year = parseInt(parts[2], 10);
// check the range of year and month
  let date =  new Date().getFullYear();
  if(year < 1000 || year > date || month == 0 || month > 12) {
    return false;
  }
// set the leap years case
  var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
    monthLength[1] = 29;
  }
// check the range of day
  return day > 0 && day <= monthLength[month - 1];
}

// validate quantity
function quantityValidation() {
  let inputValue = document.getElementById("quantity").type;
  if(inputValue >= 0 && inputValue.type == "number" && inputValue < 100) {
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
  if(inputValue.checked != true) {
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
  if(firstValidation() != true || lastValidation() != true || emailValidation() != true || birthdateValidation() != true || quantityValidation() != true || locationsValidation() != true || checkbox1Validation() != true) {
    return false;
  } else {
    return true;
  }
}
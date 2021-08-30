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
function validate() {
  const firstNameInput = document.getElementById("first"),
        lastNameInput = document.getElementById("last"),
        emailInput = document.getElementById("email"),
        birthdateInput = document.getElementById("birthdate"),
        quantityInput = document.getElementById("quantity"),
        location1 = document.getElementById("location1"),
        location2 = document.getElementById("location2"),
        location3 = document.getElementById("location3"),
        location4 = document.getElementById("location4"),
        location5 = document.getElementById("location5"),
        location6 = document.getElementById("location6"),
        checkbox = document.getElementById("checkbox1");
  
  const validate = () => {
    let isFormValid = true;

    const firstName = firstNameInput.value;
    const isFirstNameValid = Validation.minLength(firstName, 2) && Validation.isRequired(firstName);
    isFormValid = isFormValid && isFirstNameValid;

    const lastName = lastNameInput.value;
    const isLastNameValid = Validation.minLength(lastName, 2) && Validation.isRequired(lastName);
    isFormValid = isFormValid && isLastNameValid;

    const email = emailInput.value;
    const isEmailValid = Validation.checkEmail(email);
    isFormValid = isFormValid && isEmailValid;

    const birthdate = birthdateInput.value;
    const isBirthdateValid = Validation.checkBirthdate(birthdate);
    isFormValid = isFormValid && isBirthdateValid;

    const quantity = quantityInput.value;
    const isQuantityValid = Validation.checkQuantity(quantity);
    isFormValid = isFormValid && isQuantityValid;

    const locations = [
      location1.checked,
      location2.checked,
      location3.checked,
      location4.checked,
      location5.checked,
      location6.checked
    ];
    const isLocationsValid = Validation.isLocationsChecked(locations);
    isFormValid = isFormValid && isLocationsValid;

    const isCheckboxValid = checkbox.checked;
    isFormValid = isFormValid && isCheckboxValid;

    return isFormValid;
  };
}
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
  
    if((year % 100 != 0 && year % 4 == 0) || (year % 100 == 0 && year % 400 == 0)) {
      monthLength[1] = 29;
    }
  // check the range of day
    return day > 0 && day <= monthLength[month - 1];
  }
  // validate quantity
  function quantityValidation() {
    let inputValue = document.getElementById("quantity");
    if(inputValue.type != "number" && inputValue >= 0) {
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
form.addEventListener("submit", event => {
    event.preventDefault();
  })
  
  function validation(event) {
    //event.preventDefault();
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
    }
  }
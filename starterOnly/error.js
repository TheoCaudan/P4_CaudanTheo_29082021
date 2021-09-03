// DOM elements

// errorMessages
const errorMessages = {
  firstName: "Veuillez renseigner un prénom comportant au moins 2 caractères.",
  lastName: "Veuillez renseigner un nom comportant au moins 2 caractères.",
  email: "Veuillez renseigner une adresse email valide.",
  birthdate: "Veuillez renseigner une date de naissance au format JJ/MM/AAAA.",
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
  
// remove alerts from the past
function removeAlerts() {
    let alertBoxes = document.getElementsByClassName("form-alert");
    if(alertBoxes.length > 0) {
      for(let alert in alertBoxes) {
        remove(alert);
      }
    }
  }
  
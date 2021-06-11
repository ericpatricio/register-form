const form = document.querySelector('#form');
const name = document.querySelector('#name');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');

// Event listener
form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs([name, username, email, password, confirmPassword]);
  validateEmail(email);
  matchPasswords(password, confirmPassword);
  characterLength(username, 2, 15);
  characterLength(password, 4, 15); 
});

// Functions

// Check each input 
function checkInputs(inputArray) {
  inputArray.forEach((input) => {
    if(input.value.trim() === '') {
      showError(input, `${capitalizeFirstLetter(input)} is required`);
    } else {
      showSuccess(input);
      window.location.reload();
    }
  });
  
}

// Capitalize first letter
function capitalizeFirstLetter(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Validate email
function validateEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

// Match passwords
function matchPasswords(passwordInput, confirmInput) {
  if(passwordInput.value !== confirmInput.value) {
   showError(confirmInput, 'confirm password does not match');
  } 
}

// Character length
function characterLength(input, min, max) {
  if(input.value.length < min) {
    showError(input, `${capitalizeFirstLetter(input)} most be a least ${min} characters`);
  } else if(input.value.length > max) {
    showError(input, `${capitalizeFirstLetter(input)} most be less than ${max} characters`);
  } else {
    showSuccess(input)
  }
}

// Show error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';  
}

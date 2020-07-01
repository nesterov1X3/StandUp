// 1. learn requirements
// 2. create step by step algo (& input/output for funtions) 
// 3. create prototype solution
// 4. testing 
// 5. refactoring
// 6. final solution 



const emailInput = document.querySelector('[name="email"]');
const passwordInput = document.querySelector('[name="password"]');
const nameInput = document.querySelector('[name="name"]');
const formElem = document.querySelector('.login-form');
const submitBtnElem = document.querySelector('.submit-button');
const errorElem = document.querySelector('.error-text');

//algo

function onChangeForm(event) {
  
}

emailInput.addEventListener('input', onChangeForm);
passwordInput.addEventListener('input', onChangeForm);
nameInput.addEventListener('input', onChangeForm);

//algo
// gather form data
// htttp request
//handle pesponse
function onFormSubmit(event) {
  event.preventDefault();
   let user
}

formElem.addEventListener('submit', onFormSubmit)
//Kode for forms
const form = document.querySelector("form");




const firstNameOutput = document.querySelector("#first_name_output");
const lastNameOutput = document.querySelector("#last_name_output");
const emailOutput = document.querySelector("#email_output");
const passwordOutput = document.querySelector("#password_output");
const termsOutput = document.querySelector("#terms_output");
const beskyttelseOutput = document.querySelector("#beskyttelse_output");
const blodOutput = document.querySelector("#blod_output"); 

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":invalid").focus();
}

function handleSubmit(event) {
  event.preventDefault();

  // 1. Saml værdierne fra formularen
const formData = new FormData(form);
  
const firstName = formData.get('first_name');

const lastName = formData.get('last_name');

const email = formData.get('email');

const password = formData.get('password');

const terms = formData.get('accept_terms');

const beskyttelse = formData.get('beskyttelse');

const blod = formData.get('blod');

  // 2. Vis værdierne i de rigtige output-felter
firstNameOutput.textContent = firstName;
  lastNameOutput.textContent = lastName;
  emailOutput.textContent = email;
  passwordOutput.textContent = password;
  termsOutput.textContent = terms;
beskyttelseOutput.textContent = beskyttelse;
  blodOutput.textContent = blod;
  


  alert("Indsendt! Søg indendørs hvis du føler dig usikker! Vi har nogen på vej!");
 form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
//færdig med kode for forms
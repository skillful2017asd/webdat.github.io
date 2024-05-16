let signupLink = document.querySelector(".switch-register-form");
let signupContainer = document.querySelector("#signUp-container");

signupLink.onclick = () => {
  signupContainer.style.display = "flex";
}

const closeBtnForm = document.querySelector(".form-close");
closeBtnForm.onclick = () => {
  let inputsRegisterForm = document.querySelectorAll(
    "#signUp-container .form-group input"
  )
  document.querySelector("#signUp-container").style.display = "none"
  document.querySelector("#register-form").classList.remove("was-validated")
  inputsRegisterForm.forEach((input)=> {
    input.value = ""; 
});
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
function test() {
  'use strict'
  let forms = document.querySelectorAll('.needs-validation')
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        form.classList.add('was-validated')
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
      }, true)
    })
}
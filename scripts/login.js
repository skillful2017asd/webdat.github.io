let signupLink = document.querySelector(".switch-register-form");
let signupContainer = document.querySelector("#signUp-container");

signupLink.onclick = () => {
  signupContainer.style.display = "flex";
}

const closeBtnForm = document.querySelector(".form-close");
closeBtnForm.onclick = () => {
  document.querySelector("#signUp-container").style.display = "none"
};

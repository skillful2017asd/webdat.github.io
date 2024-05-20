let signupLink = document.querySelector(".switch-register-form");
let signupContainer = document.querySelector("#signUp-container");

signupLink.onclick = () => {
  signupContainer.style.display = "flex";
}

const closeBtnForm = document.querySelector(".form-close");
closeBtnForm.onclick = () => {
  document.querySelector("#signUp-container").style.display = "none"
};

const toggleForm = () => {
  const closeBtnForm = document.querySelector(".form-close");
  closeBtnForm.onclick = () => {
      document.querySelector("#signUp-container").style.display = "none";
      const inputsSignUpForm = document.querySelectorAll(
          "#signUp-container [name][rules]"
      );
      for (var input of inputsSignUpForm) {
          input.value = "";
          var formGroup = input.closest(".form-group");
          if (formGroup.classList.contains("invalid")) {
              formGroup.classList.remove("invalid");
              let formMessage = formGroup.querySelector(".form-message");
              if (formMessage) formMessage.innerText = "";
          }
      }
  };
  document.querySelector(".switch-register-form").onclick = () => {
      document.querySelector("#signUp-container").style.display = "flex";
  };
};
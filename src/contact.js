// dropdown menu

document.addEventListener("click", (e) => {
  const dropdownButtom =
    e.target.matches(".fa-caret-down") || e.target.matches(".dropdown-button");
  if (!dropdownButtom && e.target.closest(".dropdown-categories") != null)
    return;

  let activeDropdownButton;
  if (dropdownButtom) {
    activeDropdownButton = e.target.closest(".dropdown-categories");
    activeDropdownButton.classList.toggle("active");
  }
});

// small screen

const sideMenuButtons = document.getElementById("side-menu-buttons");
const sideMenu = document.getElementById("side-menu");

const smallSideMenu = sideMenuButtons.addEventListener("click", () => {
  sideMenu.classList.toggle("active");
});

//   subscribe to email

function validateEmail() {
  var emailError = document.querySelector(".subscribe-email-confirmation-msg");
  var email = document.getElementById("subscribe-email").value;
  var correctEmailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email == 0) {
    emailError.innerHTML = "Email is required.";
    emailError.classList.add("subscribe-email-confirmation-msg-error");
    emailError.classList.remove("subscribe-email-confirmation-msg-valid");
    setTimeout(
      () => (
        (document.querySelector(".subscribe-email-confirmation-msg").innerHTML =
          ""),
        (document.getElementById("subscribe-email").value = "")
      ),

      1000
    );
    return false;
  }

  if (!email.match(correctEmailFormat)) {
    emailError.innerHTML = "Email is invalid. Try again.";
    emailError.classList.add("subscribe-email-confirmation-msg-error");
    emailError.classList.remove("subscribe-email-confirmation-msg-valid");
    setTimeout(
      () => (
        (document.querySelector(".subscribe-email-confirmation-msg").innerHTML =
          ""),
        (document.getElementById("subscribe-email").value = "")
      ),

      1000
    );
    return false;
  }

  emailError.innerHTML = "You sucesfully subscribed to our newsletter!";
  emailError.classList.remove("subscribe-email-confirmation-msg-error");
  emailError.classList.add("subscribe-email-confirmation-msg-valid");
  setTimeout(
    () => (
      (document.querySelector(".subscribe-email-confirmation-msg").innerHTML =
        ""),
      (document.getElementById("subscribe-email").value = "")
    ),

    3000
  );
  return true;
}
document.querySelector(".fa-envelope").addEventListener("click", validateEmail);

var firstNameError = document.querySelector("#firstname-error");
var lastNameError = document.querySelector("#lastname-error");
var phoneError = document.querySelector("#phone-error");
var emailError = document.querySelector("#email-error-form");
var messageError = document.querySelector("#message-error");
var submitError = document.querySelector("#submit-error");
var submitField = document.querySelector("#submit-form");

// First name validation
var firstNameField = document.getElementById("first-name");
firstNameField.addEventListener("input", validateFirstName);

function validateFirstName() {
  var firstName = document.getElementById("first-name").value;
  var letters = /^[A-Za-z]+$/;

  if (firstName == 0) {
    firstNameError.innerHTML = "First name is required";
    return false;
  }

  if (!firstName.match(letters)) {
    firstNameError.innerHTML = "First name is invalid";
    return false;
  }

  firstNameError.innerHTML =
    '<i class="fa-solid fa-check" style = "color:seagreen"></i>';
  return true;
}

//Last name validation
var lastNameField = document.getElementById("last-name");
lastNameField.addEventListener("input", validateLastName);

function validateLastName() {
  var lastName = document.getElementById("last-name").value;
  var letters = /^[A-Za-z]+$/;

  if (lastName == 0) {
    lastNameError.innerHTML = "Last name is required";

    return false;
  }

  if (!lastName.match(letters)) {
    lastNameError.innerHTML = "Last name is invalid";

    return false;
  }

  lastNameError.innerHTML =
    '<i class="fa-solid fa-check" style = "color:seagreen"></i>';
  return true;
}

//  Phone number validation
var phoneNumberField = document.getElementById("phone-number");
phoneNumberField.addEventListener("input", validatePhoneNumber);

function validatePhoneNumber() {
  var phoneNumber = document.getElementById("phone-number").value;
  var numbers = /^[0-9]{10}$/;

  if (phoneNumber == 0) {
    phoneError.innerHTML = "Telephone number is required";

    return false;
  }

  if (!phoneNumber.match(numbers)) {
    phoneError.innerHTML = "Telephone number is invalid";

    return false;
  }

  phoneError.innerHTML =
    '<i class="fa-solid fa-check" style = "color:seagreen"></i>';

  return true;
}

//  Email validation

var emailField = document.getElementById("email-form");
emailField.addEventListener("input", validateEmailForm);

function validateEmailForm() {
  var email = document.getElementById("email-form").value;
  var correctEmailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email == 0) {
    emailError.innerHTML = "Email is required";

    return false;
  }

  if (!email.match(correctEmailFormat)) {
    emailError.innerHTML = "Email is invalid";

    return false;
  }

  emailError.innerHTML =
    '<i class="fa-solid fa-check" style = "color:seagreen"></i>';

  return true;
}

// Message validation
var messageField = document.getElementById("contact-message");
var messageCounterField = document.getElementById("message-counter");
var maxNumberOfCharacters = 200;

messageField.addEventListener("input", validateMessage);

function validateMessage() {
  var messageText = document.getElementById("contact-message").value;
  var charactersLeft = maxNumberOfCharacters - messageText.length;
  messageCounterField.innerHTML = charactersLeft + " remining characters";

  if (messageText == 0) {
    messageError.innerHTML = "Please type your message";
    return false;
  }

  if (charactersLeft <= 10) {
    messageCounterField.style.color = "red";
  } else if (charactersLeft <= 50) {
    messageCounterField.style.color = "orange";
  }

  messageError.innerHTML =
    '<i class="fa-solid fa-check" style = "color:seagreen"></i>';
  return true;
}

// Form validation
var formValidation = document.getElementById("form");
formValidation.addEventListener("submit", validateForm);
var submitCorrect = document.getElementById("submit-correct");

function registerForm() {
  var firstName = document.getElementById("first-name").value;
  console.log(firstName);
  var lastName = document.getElementById("last-name").value;
  console.log(lastName);
  var phoneNumber = document.getElementById("phone-number").value;
  console.log(phoneNumber);
  var email = document.getElementById("email-form").value;
  console.log(email);
  var messageText = document.getElementById("contact-message").value;
  console.log(messageText);
}

function fieldReset() {
  firstNameField.classList.remove("input-valid");
  firstNameError.innerHTML = "";
  lastNameField.classList.remove("input-valid");
  lastNameError.innerHTML = "";
  phoneNumberField.classList.remove("input-valid");
  phoneError.innerHTML = "";
  emailField.classList.remove("input-valid");
  emailError.innerHTML = "";
  messageField.classList.remove("input-valid");
  messageError.innerHTML = "";
  messageCounterField.innerHTML =
    maxNumberOfCharacters + " remining characters";
  messageCounterField.style.color = "white";
}

function validateForm(e) {
  e.preventDefault();
  if (
    !validateFirstName() ||
    !validateLastName() ||
    !validatePhoneNumber() ||
    !validateEmailForm() ||
    !validateMessage()
  ) {
    submitError.innerHTML = "Correct the form information to submit";
    submitCorrect.innerHTML = "";
    submitCorrect.classList.remove("submit-correct");
    return false;
  } else {
    var firstName = document.getElementById("first-name").value;
    submitError.innerHTML = "";
    submitCorrect.classList.add("submit-correct");
    submitCorrect.innerHTML = "Thank you for your message, " + firstName + " !";
    registerForm();
    form.reset();
    fieldReset();
    setTimeout(
      () => (
        (submitCorrect.innerHTML = ""),
        submitCorrect.classList.remove("submit-correct")
      ),
      3000
    );
    return true;
  }
}

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

// show products details

import { productCardDetails } from "./cards.js";

const showProductDetails = async () => {
  const searchParamString = window.location.search;

  const searchParam = new URLSearchParams(searchParamString);
  const productId = searchParam.get("id");

  const productURL = `https://632b4e9d1090510116d684a1.mockapi.io/Products/${productId}`;
  const result = await fetch(productURL)
    .then((result) => result.json())
    .then((products) => {
      const productDetails = productCardDetails(products);

      document.querySelector(".product-details").innerHTML = productDetails;
    });
  // const productDetails = await result.json();
};

window.addEventListener("DOMContentLoaded", showProductDetails);

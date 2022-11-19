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

sideMenuButtons.addEventListener("click", () => {
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

// Above shoud be imported

import { createCartCard } from "./cards.js";

const loadProducts = () => {
  const productIds = JSON.parse(localStorage.getItem("products"));

  console.log(productIds);

  const products = [];

  productIds.forEach(async (productId) => {
    const result = await fetch(
      `https://632b4e9d1090510116d684a1.mockapi.io/Products/${productId}`
    )
      .then((result) => result.json())
      .then((product) => {
        const innerHTMLProduct = createCartCard(product);
        document.querySelector(".cart-table").innerHTML += innerHTMLProduct;
        updateCartTotal();
      });
    // const product = await result.json();
    // const innerHTMLProduct = createCartCard(product);
  });
};
window.addEventListener("DOMContentLoaded", loadProducts);

// delete

function removeFromCart(event) {
  if (event.target.classList.contains("remove-item")) {
    event.target.parentElement.parentElement.remove();

    const productId = event.target.id;
    const products = JSON.parse(localStorage.getItem("products"));
    for (var i = 0; i < products.length; i++) {
      if (products[i] === productId) {
        products.splice(i, 1);
        localStorage.setItem("products", JSON.stringify(products));
      }
    }
  }
  updateCartTotal();
}

document.querySelector(".cart-table").addEventListener("click", removeFromCart);

// update cart

function updateCartTotal() {
  const cartItemContainer = document.getElementsByClassName("cart-table")[0];
  const cartRows = cartItemContainer.getElementsByClassName("card-table-row");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    let priceElement = cartRow.getElementsByClassName("price-element")[0];
    let quantityElement = cartRow.getElementsByClassName("quantity-element")[0];
    var price = parseFloat(priceElement.innerHTML.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
    // console.log(quantityElement);
    // console.log(quantity);
  }
  document.querySelector(".total-price").innerHTML = total + " " + "$";
  updateQuantity();
}

function updateQuantity() {
  const validQuatity = document.getElementsByClassName("quantity-element");
  for (var i = 0; i < validQuatity.length; i++) {
    const quatityInput = validQuatity[i];
    quatityInput.addEventListener("change", quantityChange);
  }
}

function quantityChange() {
  const cartItemContainer = document.getElementsByClassName("cart-table")[0];
  const cartRows = cartItemContainer.getElementsByClassName("card-table-row");
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    let stockElement = cartRow.getElementsByClassName("cart-stock")[0];
    var availableStock = parseFloat(stockElement.innerHTML);
    let quantityElement = cartRow.getElementsByClassName("quantity-element")[0];
    var validQuatityInput = quantityElement;
    if (validQuatityInput.value > availableStock) {
      validQuatityInput.value = availableStock;
    }
    if (isNaN(validQuatityInput.value) || validQuatityInput.value <= 0) {
      validQuatityInput.value = 1;
    }
  }
}

// dropdown menu

export const dropdownMenu = document.addEventListener("click", (e) => {
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

export const smallSideMenu = sideMenuButtons.addEventListener("click", () => {
  sideMenu.classList.toggle("active");
});

//   subscribe to email

export function validateEmail() {
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

// add products to cart

const addProductToCart = async (id) => {
  let products = JSON.parse(localStorage.getItem("products"));
  if (products == null) products = [];
  products.push(id);
  localStorage.setItem("products", JSON.stringify(products));
  openPopup();
};

export const addProductToCartButton = (event) => {
  if (event.target.classList.contains("add-to-cart")) {
    const productId = event.target.id;
    addProductToCart(productId);
  }
};

// add to shopping cart confirmation message
let popup = document.querySelector(".popup-confirmation");

function openPopup() {
  popup.classList.add("popup-open");
}

function closePopup() {
  popup.classList.remove("popup-open");
}

document.querySelector(".close-popup").addEventListener("click", closePopup);

import {
  dropdownMenu,
  smallSideMenu,
  validateEmail,
  addProductToCartButton,
} from "./utils.js";
dropdownMenu;
smallSideMenu;
validateEmail();

// add products cards
import { createProductCard } from "./cards.js";
import { getAllProducts } from "./products.js";

window.addEventListener("DOMContentLoaded", async () => {
  const products = await getAllProducts();
  const productCards = products.map((product) => createProductCard(product));

  const innerHTMLProducts = productCards.join("");
  document.querySelector(".products-container").innerHTML = innerHTMLProducts;
});

// add to shopping cart

document
  .querySelector(".products-container")
  .addEventListener("click", addProductToCartButton);

// slideshow

const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

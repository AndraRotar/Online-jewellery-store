import {
  dropdownMenu,
  smallSideMenu,
  validateEmail,
  addProductToCartButton,
} from "../src/utils.js";
dropdownMenu;
smallSideMenu;
validateEmail();

const category = document.querySelector(".bracelets-container");

fetch("https://632b4e9d1090510116d684a1.mockapi.io/Products")
  .then((result) => result.json())
  .then((data) => {
    let output = "";
    data.map((product) => {
      if (product.category == "Bracelets") {
        output += `<div class='card-bracelets'>
        <h3>${product.name}</h3>
        <img src= '${product.imgURL}'/>
        <p>${product.price} $</p>  
        <div class = "card-buttons">
        <a href = "/details.html?id=${product.id}">Details</a>
        <div class="add-to-cart" id ="${product.id}" >Add to cart</div>
        </div>
    </div>`;
        category.innerHTML = output;
      }
    });
  });

// add to shopping cart

document
  .querySelector(".bracelets-container")
  .addEventListener("click", addProductToCartButton);

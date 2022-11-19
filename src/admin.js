import { createProductCardAdmin } from "./cards.js";
import {
  getAllProducts,
  postNewProduct,
  deleteProductById,
} from "./products.js";

// Add new product section
// class hide-new-product-form class item-form

document
  .getElementById("add-product-section-button")
  .addEventListener("click", () => {
    document
      .querySelector(".item-form")
      .classList.toggle("hide-new-product-form");
  });

// Create products table
const populateProductsTable = async () => {
  const products = await getAllProducts();
  const productCards = products.map((product) =>
    createProductCardAdmin(product)
  );

  const innerHTMLProducts = productCards.join("");
  document.querySelector(".admin-table").innerHTML = innerHTMLProducts;
};

window.addEventListener("DOMContentLoaded", populateProductsTable);

// Add product

const inputName = document.getElementById("name");
const inputPrice = document.getElementById("price");
const inputImg = document.getElementById("image");
const inputDescription = document.getElementById("description");
const inputSpecification = document.getElementById("specification");
const inputCategory = document.getElementById("category");
const inputSubcategory = document.getElementById("subcategory");
const inputStock = document.getElementById("admin-stock");

function clearItems() {
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("image").value = "";
  document.getElementById("description").value = "";
  document.getElementById("specification").value = "";
  document.getElementById("category").value = "Earrings";
  document.getElementById("subcategory").value = "Earrings";
  document.getElementById("admin-stock").value = "";
}

const addProduct = async () => {
  const product = {
    name: inputName.value,
    price: inputPrice.value,
    imgURL: inputImg.value,
    description: inputDescription.value,
    specification: inputSpecification.value,
    category: inputCategory.value,
    subcategory: inputSubcategory.value,
    stock: inputStock.value,
  };
  const response = await postNewProduct(product);
  if (response.ok === false) {
    document.querySelector(".confirmation-message").innerHTML =
      "There was an error";
  } else {
    document
      .querySelector(".confirmation-message")
      .classList.toggle("submit-message");
    document.querySelector(".confirmation-message").innerHTML =
      "Product added successfully!";
    await populateProductsTable();
    setTimeout(
      () => (
        (document.querySelector(".confirmation-message").innerHTML = ""),
        document
          .querySelector(".confirmation-message")
          .classList.remove("submit-message")
      ),
      3000
    );
    clearItems();
  }
};

document.getElementById("add-button").addEventListener("click", addProduct);

// delete product

const deleteProductFromAdmin = async (event) => {
  if (
    event.target.classList.contains("delete-button-admin" || "fa-trash-can")
  ) {
    const productId = event.target.id;
    const response = await deleteProductById(productId);
    if (response.ok) {
      await populateProductsTable();
    }
  }
};

const deleteButton = document.querySelector(".products-list");
deleteButton.addEventListener("click", deleteProductFromAdmin);

// Edit product

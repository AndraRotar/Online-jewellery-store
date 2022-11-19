import { createEditForm } from "./cards.js";

const searchParamString = window.location.search;

const searchParam = new URLSearchParams(searchParamString);
const productId = searchParam.get("id");

const productURL = `https://632b4e9d1090510116d684a1.mockapi.io/Products/${productId}`;

let product = {
  name: "",
  price: "",
  imgURL: "",
  description: "",
  specification: "",
  category: "",
  subcategory: "",
  stock: "",
};

window.addEventListener("DOMContentLoaded", async () => {
  const result = await fetch(productURL)
    .then((result) => result.json())
    .then((form) => {
      const editForm = createEditForm(form);
      document.querySelector(".product-edit-form").innerHTML = editForm;
    });
});

const updateProduct = async () => {
  let response = await fetch(productURL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: document.getElementById("name").value,
      price: document.getElementById("price").value,
      imgURL: document.getElementById("image").value,
      description: document.getElementById("description").value,
      specification: document.getElementById("specification").value,
      category: document.getElementById("category").value,
      subcategory: document.getElementById("subcategory").value,
      stock: document.getElementById("stock").value,
    }),
  });
  const data = await response.json();
  console.log(data);
  document
    .querySelector(".confirmation-message")
    .classList.toggle("submit-message");
  document.querySelector(".confirmation-message").innerHTML =
    "Product updated successfully!";
  setTimeout(
    () => (
      (document.querySelector(".confirmation-message").innerHTML = ""),
      document
        .querySelector(".confirmation-message")
        .classList.remove("submit-message")
    ),
    3000
  );
};

document.querySelector("#edit-button").addEventListener("click", updateProduct);

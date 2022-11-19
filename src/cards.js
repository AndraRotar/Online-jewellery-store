// main page card
export const createProductCard = (product) => {
  return `<div class='card'>
          <h3>${product.name}</h3>
          <img src= '${product.imgURL}'/>
          <p>${product.price} $</p>  
          <div class = "card-buttons">
          <a href = "details.html?id=${product.id}">Details</a>
          <div class="add-to-cart" id ="${product.id}" >Add to cart</div>
          </div>
      </div>`;
};

// details card

export const productCardDetails = (productDetails) => `
<div class = "product-card">
<div class = "product-img-details"> 
<img src= '${productDetails.imgURL}'/>
</div>
<div class = "product-card-details">
<h1>${productDetails.name}</h1>
<p><span>Price: </span> ${productDetails.price}$</p>
<p><span>Description: </span> ${productDetails.description}</p>
<p><span>Specification: </span> ${productDetails.specification}</p>
<p><span>Category: </span> ${productDetails.category}</p>
<input class = "go-back-button"
  type="button"
  value="Back to shopping"
  onclick="history.go(-1)"
/>
</div>
</div>`;

// admin product card

export const createProductCardAdmin = (product) => {
  return `<div class='admin-card'>
          <table class ='admin-table'> 
            <tr>
              <td>${product.id}</td>
              <td>${product.name}</td>
              <td>${product.price} $</td>
              <td> <img src= '${product.imgURL}'/></td>
              <td>${product.description}</td>
              <td>${product.specification}</td>
              <td>${product.category}</td>
              <td>${product.subcategory}</td>
              <td><p id="cart-stock">${product.stock}</p></td>
              <td><button  class="delete-button-admin" id="${product.id}"><i class="fa-solid fa-trash-can"></i></button></td>
              <td><a href="edit-form.html?id=${product.id}" class="edit-button-admin" id="${product.id}"><i class="fa-solid fa-pen-to-square"></i></td>
            </tr>
          </table>
      </div>`;
};

// cart card

export const createCartCard = (product) => {
  return `<tr class ='card-table-row'>
      <td>${product.id}</td>
      <td>${product.name}</td>
      <td class = "price-element">${product.price} $</td>
      <td> <img src= '${product.imgURL}'/></td>  
      <td><input class="quantity-element" type="number" value="1"/> </td>  
      <td><p class="cart-stock">${product.stock}</p></td>
      <td><button id=${product.id} class="remove-item"><i class="fa-solid fa-rectangle-xmark"></i> Remove element</button></td>
      </tr>`;
};

// Edit form

export const createEditForm = (product) => {
  return `
  <div class="confirmation-message"></div>
  <h3>Edit product</h3>
    <div class="input-item-form">
    <div class="item">
      <label for="label-item">Product name:</label>
      <input type="text" placeholder="name..." id="name" value = "${product.name}" />
    </div>

    <div class="item">
      <label for="label-item">Product price:</label>
      <input type="text" placeholder="$$..." id="price" value = "${product.price}"/>
    </div>

    <div class="item">
      <label for="label-item">Product picture:</label>
      <input type="text" placeholder="image URL..." id="image" value = "${product.imgURL}"/>
    </div>

    <div class="item">
      <label for="label-item">Product description:</label>
      <input
      type="text"
      placeholder="pair of gold and silver accessories...."
      id="description"
      value = "${product.description}"
    />
    </div>

    <div class="item">
      <label for="label-item">Product specification:</label>
      <input
              type="text"
              placeholder="material, cut, gem...."
              id="specification"
              value = "${product.specification}"
            />
    </div>

    <div class="item">
      <label for="label-item">Product stock:</label>
      <input
              type="text"
              placeholder="material, cut, gem...."
              id="stock"
              value = "${product.stock}"
            />
    </div>

    <div class="item">
      <label for="category">Select category:</label>
      <select name="category" id="category" >
      <option value="${product.category}" selected disabled>${product.category}
    </option>
    <option value="Earrings">Earrings</option>
    <option value="Necklaces">Necklaces</option>
    <option value="Bracelets">Bracelets</option>
    <option value="Rings">Rings</option>
    <option value="Watches">Watches</option>
    <option value="Body jewellery">Body jewellery</option>
      </select>
    </div>
    <div class="item">
      <label for="subcategory">Select subcategory:</label>
      <select name="subcategory" id="subcategory" >
      <option value="${product.subcategory}" selected disabled>${product.subcategory}
              </option>
      <option value="Stud Earrings">Stud Earrings</option>
      <option value="Hoop Earrings">Hoop Earrings</option>
      <option value="Pendant Neckless">Pendant Neckless</option>
      <option value="Classic Neckless">Classic Neckless</option>
      <option value="Chain Bracelets">Chain Bracelets</option>
      <option value="Band rings">Band rings</option>
      <option value="Engagement Rings">Engagement Rings</option>
      <option value="Women's Watches">Women's Watches</option>
      <option value="Men's Watches">Men's Watches</option>
      <option value="Body jewellery">Body jewellery</option>
      </select>
    </div>

  </div>`;
};

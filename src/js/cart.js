import { getLocalStorage } from "./utils.mjs";

// addProductToCart() {
//         const cartItems = getLocalStorage("so-cart") || [];
//         cartItems.push(this.product);
//         setLocalStorage("so-cart", cartItems);
//     }


function renderCartContents() {


  const cartItems = getLocalStorage("so-cart");
  const productList = document.querySelector(".product-list");


  if (cartItems) {
    const htmlItems = cartItems.map((item) =>
    cartItemTemplate(item)
    );

    productList.innerHTML = htmlItems.join("");
  } else {
    productList.innerHTML = `<li class="cart-card divider"><h2>Empty Cart</h2></li>`;
  }
  
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();

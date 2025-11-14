import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  const productsList = getLocalStorage("so-cart") || []; // Create an array if there isn't an array in the first place

  productsList.push(product); // Add the new item to the cart array

  setLocalStorage("so-cart", productsList); // Set the value for the "so-cart" item in the LocalStorage as the array.
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);

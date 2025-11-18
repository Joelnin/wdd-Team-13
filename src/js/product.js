import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";

loadHeaderFooter();

const productID = getParam("product");

const dataSource = new ProductData();

// console.log(dataSource.findProductById(productID));

const product = new ProductDetails(productID, dataSource);

product.init();

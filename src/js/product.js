import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

const dataSource = new ProductData("tents");
const productID = getParam("product");

// console.log(dataSource.findProductById(productID));

const product = new ProductDetails(productID, dataSource);
product.init();

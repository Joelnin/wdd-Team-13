import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";

loadHeaderFooter();

const category = getParam('category');

const dataSource = new ProductData();

const products = document.querySelector(".product-list");

const productList = new ProductList(category, dataSource, products);

productList.init();

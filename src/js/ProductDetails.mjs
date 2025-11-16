import { getLocalStorage, setLocalStorage } from "./utils.mjs";

export default class ProductDetails {

    constructor(productId, dataSource) {
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
    }
    
    async init() {
        this.product = await this.dataSource.findProductById(this.productId);
        this.renderProductDetails();
        document.getElementById('addToCart')
        .addEventListener('click', this.addProductToCart.bind(this));
    }

    addProductToCart() {
        const cartItems = getLocalStorage("so-cart") || [];
        cartItems.push(this.product);
        setLocalStorage("so-cart", cartItems);
    }

    renderProductDetails() {

        let h3 = document.querySelector('.card__brand');
        h3.textContent = this.product.Brand.Name;
        
        let h2 = document.querySelector('.card__name');
        h2.textContent = this.product.NameWithoutBrand;

        let productImage = document.getElementById('productImage');
        productImage.src = this.product.Image;
        productImage.alt = this.product.NameWithoutBrand;

        let price = document.querySelector('.product-card__price');
        price.textContent = this.product.FinalPrice;
        
        let color = document.querySelector('.product__color');
        color.textContent = this.product.Colors[0].ColorName;

        let description = document.querySelector('.product__description')
        description.innerHTML = this.product.DescriptionHtmlSimple;

        let addToCart = document.getElementById('addToCart')
        addToCart.dataset.id = this.product.Id;
    }
}
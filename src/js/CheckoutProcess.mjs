import { getLocalStorage } from "./utils.mjs";


export default class CheckoutProcess {
    constructor(key, outputSelector) {
        this.key = key;
        this.outputSelector = outputSelector;
        this.list = [];
        this.itemTotal = 0;
        this.shipping = 0;
        this.tax = 0;
        this.orderTotal = 0;
    }

    init() {
        this.list = getLocalStorage(this.key);
        this.calculateItemSummary();
    }

    calculateItemSummary() {
        // calculate and display the total dollar amount of the items in the cart, and the number of items.
        const orderSummary = document.querySelector(this.outputSelector);

        const itemCount = this.list.length;
        this.itemTotal = this.list.reduce(
            (sum, item) => sum + item.FinalPrice,
            0
        );

        const subtotalEl = orderSummary.querySelector("#subtotal");
        if (subtotalEl) subtotalEl.innerText = `$${this.itemTotal.toFixed(2)}`;

        const itemsEl = orderSummary.querySelector("#items-count");
        if (itemsEl) itemsEl.innerText = `${itemCount} items`;
    }

    calculateOrderTotal() {
        // calculate the tax and shipping amounts. Add those to the cart total to figure out the order total

        this.tax = this.itemTotal * 0.06;
    this.shipping = 10 + (this.list.length - 1) * 2;
        this.orderTotal = (
        
      parseFloat(this.itemTotal) +
      parseFloat(this.tax) +
      parseFloat(this.shipping)
    )

            // display the totals.
        this.displayOrderTotals();
    }

    displayOrderTotals() {
        // once the totals are all calculated display them in the order summary page

        const orderSummary = document.querySelector(this.outputSelector);

    const shipping = document.querySelector(`${this.outputSelector} #shipping`);
    const orderTotal = document.querySelector(`${this.outputSelector} #orderTotal`);
    const tax = orderSummary.querySelector("#tax");

    tax.innerText = `$${this.tax.toFixed(2)}`;
    shipping.innerText = `$${this.shipping.toFixed(2)}`;
    orderTotal.innerText = `$${this.orderTotal.toFixed(2)}`;

    }
}
import { Component } from "../common/Component.js";
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";
import { ProductList } from "./ProductList.js";
import { CartList } from "./CartList.js";


export class App extends Component {
  constructor(props) {
    super(props);
    this.productList = new ProductList({ cartContext: this.props.cartContext });
  }

  reloadProductList() {
    const main = document.querySelector('main');
    main.querySelector('.all-products').innerHTML = '';
    this.productList.mount(main.querySelector('.all-products'));
  }

  render() {
    const container = document.createElement('div')
    container.classList = "container"
    container.innerHTML =
      `
      <div class="header-wrapper fixed-top bg-primary"></div>
      <div class="content d-flex flex-row">
        <main>
        <h2>All Products</h2>
        <div class="all-products"><div>
        </main>
        <div class ="cart"><h3>My Cart</h3></div>
      </div>
      <div class="footer-wrapper"></div>
  `

    const header = new Header({
      cartContext: this.props.cartContext,
      reload: this.reloadProductList.bind(this)
    }).render();
    const footer = new Footer({ copyrightText: 'A-0524 All Rights Reserved.' }).render()
    const cartList = new CartList({ cartContext: this.props.cartContext }).render()


    container.querySelector('.header-wrapper').appendChild(header)
    this.productList.mount(container.querySelector('.all-products'));
    container.querySelector('.cart').appendChild(cartList)
    container.querySelector('.footer-wrapper').append(footer)



    return container;
  }
}
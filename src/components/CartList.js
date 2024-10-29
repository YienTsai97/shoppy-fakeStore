import { Component } from "../common/Component.js";
import { CartItem } from "./CartItem.js";

export class CartList extends Component {
  constructor(props) {
    super(props)
    this.state = { cart: [] }
    this.updateCart = this.updateCart.bind(this)
    this.props.cartContext.subscribe(this.updateCart)
    this.chartUl = null
  }


  updateCart(cart) {
    this.state.cart = cart
    this.chartUl.innerHTML = ""

    //// front end reduce method: equals to updateQuantity() method
    // const total = this.props.cartContext.cart.reduce((acc, current) => {
    //   return acc + current.quantity
    // }, 0)

    const totalElement = document.createElement('div')
    totalElement.classList = "cart-list-title px-3 d-flex flex-row gap-2 align-center pt-3"
    totalElement.innerHTML = `
      <div class="cart-icon">
        <img src="../asset/shoppingCart_icon2.png" alt="Logo" width="50" height="50" class="d-inline-block align-text-top">
        <span class="quantity-icon"><h4>${this.props.cartContext.updateQuantity()}</h4></span>
      <div>
    `
    //totalElement.innerHTML = total
    this.chartUl.appendChild(totalElement)

    const subTotalElement = document.createElement('div')
    subTotalElement.classList = "cart-list-subTotal pt-3  "
    subTotalElement.innerHTML = `<h4>Subtotal</h4><h2>$ ${this.props.cartContext.updateSubTotal()}</h2>`
    this.chartUl.appendChild(subTotalElement)


    this.state.cart.forEach(product => {
      const cartItem = new CartItem({
        product,
        cartContext: this.props.cartContext
      })
      this.chartUl.appendChild(cartItem.render())
    });

  }

  render() {
    const cartElement = document.createElement('div')
    cartElement.classList = "cart-list"
    cartElement.innerHTML = `
    <ul class="px-3 d-flex flex-wrap gap-3"></ul>
  `
    this.chartUl = cartElement.querySelector('ul')

    return cartElement
  }
}
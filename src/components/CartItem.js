import { Component } from "../common/Component.js";

export class CartItem extends Component {
  constructor(props) {
    super(props)
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this)
  }


  handleAddQuantity(id) {
    this.props.cartContext.addQuantity(id)
    console.log(`add ${this.props.product.id} quantity:${this.props.product.quantity}`)
  }

  handleSubstractQuantity(id) {
    this.props.cartContext.substractQuantity(id)
    console.log(`sub ${this.props.product.id} quantity:${this.props.product.quantity}`)
  }

  handleRemoveProduct(id) {
    this.props.cartContext.removeProduct(id)
    console.log(`cart - RemoveQuantity activated/ ${this.props.product.id}:${this.props.product.title}`)
  }

  render() {
    const cartUlElement = document.createElement('li')
    cartUlElement.classList = "cart-product px-0"

    cartUlElement.innerHTML = `
<div class="card mb-3" style="max-width: 100%;">
    <div class="cart-item-group flex flex-row flex-wrap g-0">
        <div class="cart-img">
            <img src="${this.props.product.image}" class="img-fluid rounded-start" alt="..." width="100px" height="120px">
        </div>
        <div class=" cart-body">
            <div class="card-body">
                <h4 class="card-text">$${this.props.product.price}</h4>
                <div class="btn-group d-flex flex-row">
                    <label class="quantity-calculater d-flex flex-row border border-1 rounded-pill overflow-hidden">
                        <button id='btn-sub' class="btn btn-primary btn-sm">-</button>
                        <p class="card-text"><small class="text-body-secondary">${this.props.product.quantity}</small>
                        </p>
                        <button id='btn-add' class="btn btn-primary btn-sm">+</button>
                    </label>
                    <button id='btn-delete' class="btn btn-primary btn-sm"><img src="../asset/trashBin_icon.png" alt="Logo" width="20" height="20" class="d-inline-block align-text-top"></button>
                </div>
            </div>
        </div>
    </div>
</div>
    `

    cartUlElement.querySelector('#btn-sub').addEventListener("click", () => this.handleSubstractQuantity(this.props.product.id))
    cartUlElement.querySelector('#btn-add').addEventListener("click", () => this.handleAddQuantity(this.props.product.id))
    cartUlElement.querySelector('#btn-delete').addEventListener("click", () => this.handleRemoveProduct(this.props.product.id))

    return cartUlElement
  }
}
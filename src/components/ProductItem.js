import { Component } from "../common/Component.js";

export class ProductItem extends Component {
  constructor(props) {
    super(props)
    this.handleAddToCart = this.handleAddToCart.bind(this)
    this.showCard = this.showCard.bind(this)
    this.hideCard = this.hideCard.bind(this)

  }
  handleAddToCart() {
    this.props.cartContext.addProduct(this.props.product)
  } //worked


  showCard() {
    const cardContent = document.querySelector('.cardContent')
    cardContent.innerHTML = `
      <div id="card${this.props.product.id}" class="card mb-3" style="max-width: 700px;">
          <div class="card-group  g-0">
              <div class=" card-img">
                  <img src="${this.props.product.image}" class="img-fluid rounded-start" alt="..." width="150" height="180">
              </div>
              <div class="col-md-8">
                  <div class="card-body">
                      <div class="rating-star-outer"><div class="rating-star-inner2"></div></div>
                      <p class="card-text"><small class="text-body-secondary">with ${this.props.product.rating.count}
                              comments</small></p>
                      <div>
                          <h3 class="card-title">${this.props.product.title}</h3>
                          <h4>$${this.props.product.price}</h4>
                      </div>
                      <p class="card-text">${this.props.product.description}</p>
                      <button class="btn btn-primary btn-sm  add-to-cart-btn2">
                        <img src="../asset/shoppingCart_icon.png" alt="add-to-cart" width="20" height="20" class="d-inline-block align-text-top">
                        Add to Cart
                      </button>
                      <button class="btn btn-primary close-btn">Close</button>
                  </div>
              </div>
          </div>
      </div>
    `
    document.querySelector('.rating-star-inner2').style.width = (this.props.product.rating.rate * 2).toFixed(0) * 10 + "%"
    document.querySelector('.add-to-cart-btn2').addEventListener("click", this.handleAddToCart)
    document.querySelector('.close-btn').addEventListener("click", this.hideCard)
    console.log('activated')
  }

  hideCard() {
    const cardContent = document.querySelector('.cardContent')
    cardContent.innerHTML = ""
  }

  render() {
    const product = document.createElement('div')
    product.classList = "product-item"
    product.innerHTML = `

      <div class="product-item-img"><img src="${this.props.product.image}" alt="${this.props.product.title}" width="125" height="150"></div>
      <div class = "product-item-main">
          <div class="product-item-body">
              <h5> <span>${this.props.product.title}<span></h5>
              <div class="rating-star-outer">
                  <div class="rating-star-inner"></div>
              </div>
              <h4>$${this.props.product.price}</h4>
          </div>
          <div class="product-item-btn d-flex flex-row gap-2">
              <button class="btn btn-primary add-to-cart-btn">
              <img src="../asset/shoppingCart_icon.png" alt="add-to-cart" width="20" height="20" class="d-inline-block align-text-top">
              </button>
              <button class="btn btn-primary show-more">
              <img src="../asset/about-us.png" alt="see-more" width="20" height="20" class="d-inline-block align-text-top">
              </button>
          </div>
         </div> 
      <div class="cardContent"></div>

`
    product.querySelector('.show-more').addEventListener("click", this.showCard)
    product.querySelector('.add-to-cart-btn').addEventListener("click", this.handleAddToCart)
    product.querySelector('.rating-star-inner').style.width = (this.props.product.rating.rate * 2).toFixed(0) * 10 + "%"


    return product
  }
}
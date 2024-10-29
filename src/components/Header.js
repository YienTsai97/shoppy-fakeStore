import { Component } from "../common/Component.js";

export class Header extends Component {
  constructor(props) {
    super(props)
  }

  handleSelectCategory(inputcategory) {
    this.props.cartContext.selectedCategory = inputcategory;

    // Call the reload method from props to trigger rerun of ProductList
    if (this.props.reload) {
      this.props.reload();  // This will rerun the ProductList mount
    }
  }


  render() {
    const header = document.createElement('header')
    header.classList = " bg-primary navbar navbar-expand-md d-flex py-0"
    header.innerHTML = `


    <div class="header-top px-3 d-flex flex-row justify-content-between bg-primary">
      <div class="header-left ">
        <a class="navbar-brand" href="#">
          <img src="../asset/brand_icon.png" alt="Logo" width="40" height="40" class="d-inline-block align-text-top">
          Shoppy
        </a>
      </div>
      <div class="header-mid">
          <div class="d-flex" >
          <input id="search-input1" class="input1 form-control me-2" type="text" placeholder="Search" >
          <button class="submit btn btn-outline-white">Search</button>
          </div>
      </div>
      <div class="header-right d-flex">
        <button class='cart-open'><img src="../asset/shoppingCart_icon.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top"></button>
        <button class="navbar-toggler" type="button"><span class="navbar-toggler-icon"></span></button>
      </div>
    </div>
    <nav class="header-bottom headerNav-hide bg-primary ">
          <ul class="navbar-nav  pe-3">
                <li id=""><a href="#">View All</a></li>
                <li id="electronics"><a href="#">Electronics</a></li>
                <li id="jewelery"><a href="#">Jewelery</a></li>
                <li id="men's clothing"><a href="#">Men's Clothing</a></li>
                <li id="women's clothing"><a href="#">Women's Clothing</a></li>
          </ul>
          <div class="searchRow2" >
          <div class="d-flex mt-3" >
          <input id="search-input2" class="input2 form-control me-2" type="text" placeholder="Search" >
          <button class="submit btn btn-outline-white">Search</button>
          </div>
          </div>
    <nav>

    
    `

    header.querySelector('.cart-open').addEventListener("click", () => {
      document.querySelector('main').classList.toggle('product-list-show-cart')
      document.querySelectorAll('.rating-star-outer').forEach(star => star.classList.toggle('rating-star-hidden'))
    })

    header.querySelectorAll("li").forEach(
      element => element.addEventListener("click", () =>
        this.handleSelectCategory(element.getAttribute('id')
        )))

    header.querySelector('.navbar-toggler').addEventListener("click", () => {
      header.querySelector('.header-bottom').classList.toggle('headerNav-hide')
    })



    document.addEventListener('DOMContentLoaded', function () {
      //const headerNav = document.querySelector('.header-bottom')
      const headerRight = document.querySelector('.header-right')

      if (window.innerWidth > 768) {
        //headerNav.classList.remove("headerNav-hide")
        headerRight.remove('header-right')
      }
    }
    )

    return header
  }
}
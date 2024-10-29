import { Component } from "../common/Component.js";
import { ProductItem } from "./ProductItem.js";

export class ProductList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      results: [],
    }
  }


  mount(container) {
    fetch(`https://fakestoreapi.com/products`)
      .then(response => response.json())
      .then(data => {
        this.state.products = data
        if (this.props.cartContext.selectedCategory) {
          this.state.results = this.state.products.filter(
            product => product.category === this.props.cartContext.selectedCategory
          );
        }

        const newProductList = this.render();
        const oldProductList = container.querySelector('.product-list');

        if (oldProductList) {
          container.replaceChild(newProductList, oldProductList);
        } else {
          container.appendChild(newProductList);
        }


        ///search
        const submit = document.querySelectorAll(".submit")
        submit.forEach(btn => btn.addEventListener("click", () => {
          const searchInput1 = document.querySelector("#search-input1")
          const searchInput2 = document.querySelector("#search-input2")
          const keyword = (searchInput1.value + searchInput2.value).toLowerCase()

          if (searchInput1.value || searchInput2.value) {
            this.state.results = this.state.products.filter(product =>
              product.title.toLowerCase().includes(keyword) ||
              product.category.toLowerCase().includes(keyword)
            );
            const newProductList = this.render();
            const oldProductList = container.querySelector('.product-list');

            if (oldProductList) {
              container.replaceChild(newProductList, oldProductList);
            } else {
              container.appendChild(newProductList);
            }
          }
        }))
      })
      .catch(error => console.error(`Error retrieving data:`, error))
  }




  render() {
    const productList = document.createElement('div')
    productList.classList = "product-list"
    productList.innerHTML = ""

    const searchInput1 = document.querySelector("#search-input1")
    const searchInput2 = document.querySelector("#search-input2")

    if (searchInput1.value || searchInput2.value) {
      this.state.results.forEach(product => {
        const productItem = new ProductItem({
          product,
          cartContext: this.props.cartContext
        })
        productList.appendChild(productItem.render())
      })
      searchInput1.value = ""
      searchInput2.value = ""
      return productList
    }
    if (this.props.cartContext.selectedCategory) {
      this.state.results.forEach(product => {
        const productItem = new ProductItem({
          product,
          cartContext: this.props.cartContext
        })
        productList.appendChild(productItem.render())
      })
    }
    else {
      this.state.products.forEach(product => {
        const productItem = new ProductItem({
          product,
          cartContext: this.props.cartContext
        })
        productList.appendChild(productItem.render())
      })
    }
    return productList
  }
}
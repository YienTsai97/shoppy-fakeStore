export class CartContext {
    constructor() {
        this.cart = []
        this.listeners = []
        this.filterProducts = []
        this.selectedCategory = ""
    }

    addProduct(product) {
        if (this.checkIterate(product)) {
            this.addQuantity(product.id)
            this.multiply(product.id)
            this.updateQuantity()
            return
        }
        this.cart.push(product)
        this.cart.find(item => item.id === product.id).quantity = 1
        this.cart.find(item => item.id === product.id).multiply = 1
        this.multiply(product.id)
        this.notifyListeners()
    }


    checkIterate(product) {
        for (const item of this.cart) {
            if (item.id === product.id) {
                return true;
            }
        }
        return false;
    }

    addQuantity(id) {
        const productId = id
        const product = this.cart.find(item => item.id === productId)
        product.quantity++
        this.multiply(id)
        this.notifyListeners()
    }

    substractQuantity(id) {
        const productId = id
        const product = this.cart.find(item => item.id === productId)
        if (product.quantity > 0) {
            product.quantity--
            this.multiply(id)
            this.notifyListeners()
            return
        }
        product.quantity = 0
        this.multiply(id)
        this.notifyListeners()
    }

    updateQuantity() {
        let total = 0;
        this.cart.forEach(item => {
            total += item.quantity
        })
        return total
    }
    // Can also do it at frontend, using reduce method  (because we only pull data from the array)

    multiply(id) {
        const productId = id
        const product = this.cart.find(item => item.id === productId)
        product.multiply = product.quantity * product.price
        //product.multiply = product.multiply.toFixed(2)
    }

    updateSubTotal() {
        let total = 0
        this.cart.forEach(item => {
            total += item.multiply
        })
        total = total.toFixed(2)
        return total
    }
    // Can also do it at frontend, using reduce method (beccause we only pull data from the array)

    removeProduct(id) {
        const productId = id
        this.cart = this.cart.filter(item => item.id !== productId)
        this.notifyListeners()
    }

    subscribe(listener) {
        this.listeners.push(listener)
    }

    notifyListeners() {
        this.updateQuantity()
        this.updateSubTotal()
        this.listeners.forEach(listener => listener(this.cart))
    }
}
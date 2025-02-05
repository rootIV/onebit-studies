module.exports = class Order {
    #total
    #items
    #user

    constructor(user, items) {
        this.#user = user
        items.forEach(({ product, quantity }) => {
            if(quantity > product.inStock){
                throw new Error('Not enough stock');
            }
        })

        this.#user = user
        this.#items = items
        this.#total = items.reduce((acc, { product, quantity }) => acc + product.price * quantity, 0);
    }

    get Data() {
        return {
            items: this.#items,
            user: this.#user,
            total: this.#total
        }
    }

}
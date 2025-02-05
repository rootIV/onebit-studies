const Product = require("./Product")

module.Exports = class Poster extends Product {
    constructor(name, description, price, height, width, inStock = 0){
        super(name, description, price, inStock);

        this.height = height;
        this.width = width;
    }
}
const Product = require("./Product");

module.exports = class Book extends Product{
    constructor(name, synopsis,description, genre, pages, author, price, inStock = 0){
        super(`Livro: ${name}, ${description}, ${price}, ${inStock}`);
        this.name = this.name;
        this.synopsis = synopsis;
        this.description = description;
        this.genre = genre;
        this.pages = pages;
        this.author = author;
        this.price = price;
        this.inStock = inStock;
    }
}

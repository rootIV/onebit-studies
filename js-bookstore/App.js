const Database = require('./Database');
const Poster = require('./entities/Poster');
const Author = require('./entities/Author');
const Book = require('./entities/Book');
const User = require('./entities/User');
const Order = require('./entities/Order');

module.exports = class App {
    static #database = new Database();

    createUser(name, email, password){
        const user = new User(name, email, password);
        App.#database.saveUser(user);
    }

    getUsers(){
        return App.#database.find('users');
    }

    createAuthor(name, nationality, biography){
        const author = new Author(name, nationality, biography);
        App.#database.saveAuthor(author);
    }

    getAuthor(){
        return App.#database.find('authors');
    }

    createBook(title, synopsis, genre, pages, author, description, price, inStock){
        const book = new Book(title, synopsis, genre, pages, author, description, price, inStock);
        App.#database.saveBook(book);
    }

    addBook(bookName, quantity){
        App.#database.addBooksToStock(bookName, quantity);
    }

    getBooks(){
        return App.#database.find('books');
    }

    createPoster(name, description, height, width, price, inStock){
        const poster = new Poster(name, description, height, width, price, inStock);
        App.#database.savePoster(poster);
    }

    addPoster(posterName, quantity){
        App.#database.addPostersToStock(posterName, quantity);
    }

    getPosters(){
        return App.#database.find('posters');
    }

    createOrder(user, items){
        const order = new Order(user, items);
        App.#database.saveOrder(order);
        order.Data.items.forEach(({product, quantity}) => {
            if(product instanceof Book){
                App.#database.removeBooksFromStock(product.name, quantity);
            }
            else if(product instanceof Poster){
                App.#database.removePostersFromStock(product.name, quantity);
            }
        });
    }

    getOrder(){
        return App.#database.find('orders');
    }

    showDatabase(){
        App.#database.showStorage();
    }
}
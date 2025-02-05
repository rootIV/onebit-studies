module.exports = class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    register() {
        console.log(this.name + ' is now registered');
    }
    login() {
        console.log(this.name + ' is now logged in');
    }
    logout() {
        console.log(this.name + ' is now logged out');
    }
    update() {
        console.log(this.name + ' is now updated');
    }
    delete() {
        console.log(this.name + ' is now deleted');
    }
}
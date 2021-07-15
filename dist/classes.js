"use strict";
class User {
    constructor(name, email, age) {
        this.age = age,
            this.email = email,
            this.name = name;
        console.log(`user ${this.name} created`);
    }
    register() {
        console.log(`user ${this.name} created`);
    }
    payInvoice() {
        console.log(`${this.name} paid invoice`);
    }
}
class Member extends User {
    constructor(id, name, email, age) {
        super(name, email, age);
        this.id = id;
    }
    payInvoice() {
        super.payInvoice();
    }
}
let john = new User('Emmanuel', 'hagioswilson@gmail.com', 14);
console.log(john.age);
let mike = new Member(1, 'Mike Smith', 'mike@testmail.com', 55);
mike.payInvoice();

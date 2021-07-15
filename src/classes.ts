interface UserInterface {
    name: string
    email: string
    age: number,
    register(): void,
    payInvoice(): void 
}

class User implements UserInterface{

    name: string
    email: string
    age: number

    constructor(name: string, email: string, age: number){
        this.age = age,
        this.email = email,
        this.name = name

        console.log(`user ${this.name} created`)
    }

    register()
    {
        console.log(`user ${this.name} created`)
    }

    payInvoice()
    {
        console.log(`${this.name} paid invoice`)
    }
}

class Member extends User{
    id: number

    constructor(id: number, name: string, email: string, age: number)
    {
        super(name, email, age)
        this.id = id
    }

    payInvoice()
    {
        super.payInvoice()
    }
}

let john = new User('Emmanuel', 'hagioswilson@gmail.com', 14)
console.log(john.age)

let mike : User = new Member(1, 'Mike Smith', 'mike@testmail.com', 55)
mike.payInvoice() 
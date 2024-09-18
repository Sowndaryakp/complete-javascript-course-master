//sub classes
class Person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}
// const mani = new Person("nani", "nair");
// console.log(mani);

class Customer extends Person{
    constructor(firstName, lastName, phone, membership){
        super(firstName,lastName);
        this.phone = phone;
        this.membership = membership;
    }
    static addNum(a, b){
        return a + b;
    }
}

const customer = new Customer("sona", "shetty", 989877659, "Standard");
console.log(customer);
// console.log(customer.getFullName());
console.log(Customer.addNum(2,4));
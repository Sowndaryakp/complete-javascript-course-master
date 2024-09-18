// //Prototypal Inheritance
// function Person(firstName, lastName){
//     this.firstName = firstName,
//     this.lastName = lastName
// }

// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

// const p1 = new Person("sonal", "shetty");
// console.log(p1);

//in the constructor to call previous properties use className.call(parameters)
// function customer(firstName, lastName, phone, membership){
//     Person.call(this, firstName, lastName);
//     this.phone = phone;
//     this.membership = membership;
// }

// //to access prototype methods
// customer.prototype = Object.create(Person.prototype);

// //to return customer constructor
// customer.prototype.constructor = customer;

// const c1 = new customer("sonall","shettyy",83738373,"Standard");
// console.log(c1.getFullName());
// console.log(c1);
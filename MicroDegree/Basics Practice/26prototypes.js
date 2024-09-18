// //prototype - It is global javascript object
// // //object.prototype(global object)
// // const person ={
// //     firstName: "soww",
// // }
// // console.log(person)


// //constructor.prototype
// function personDetails(firstName, lastName, age){
//     this.firstName= firstName,
//     this.lastName = lastName,
//     this.age = age
//     // this.getBirthYear = function(){
//     //     return 2024 - this.age;
//     // }
// }
// personDetails.prototype.getBirthYear = function(){
//     return 2024 - this.age;
// }

// personDetails.prototype.fullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

// personDetails.prototype.changeLastName = function(newLastName){
//     return (this.lastName = newLastName);
// }

// const say = new personDetails("say", "hello", 24);
// const ssss = new personDetails("ssss", "sdsd", 24);
// // console.log(ssss.getBirthYear());
// console.log(say.changeLastName("shetty"));
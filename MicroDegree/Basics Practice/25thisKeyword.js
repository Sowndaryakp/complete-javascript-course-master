// ////understanding "this" keyword

// ////this->object->object
// const person = {
//     firstName: "sow",
//     age: 24,
//     getBirthday: function(){
//         // console.log(this);//point to the entire person object
//         // console.log(this.firstName);
//         return 2024 - this.age;
//     },
//     hobbies: ["eat","sleep","code"],
//     getHobbies: function(){
//         this.hobbies.forEach(function(hobby){
//             console.log(this.firstName, hobby);
//             // console.log(this, hobby);//to show window object
//         },this);
//     }

// };

// person.getHobbies();
// // person.getBirthday();
// // console.log(person.getBirthday());


// //////this->function->window object
// // function abc(){
// //     console.log(this);
// // }

// // abc();

// //////constructor function
// // function Person(firstName){
// //     this.firstName=firstName;
// //     console.log(this);
// // }

// // const p = new Person("sow");
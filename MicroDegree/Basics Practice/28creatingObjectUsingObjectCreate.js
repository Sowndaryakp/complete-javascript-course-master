// //create objects using objects.create
// const personProtoTypes = {
//     getFullName: function(){
//         return `${this.firstName} ${this.lastName}`;
//     },
//     getChangeName: function(newLastName){
//         this.lastName = newLastName;
//     }
// };

// //method 1
// const mani = Object.create(personProtoTypes);

// mani.firstName = "Mani";
// mani.lastName = "Kumar";

// console.log(mani);
// mani.getChangeName("Bhat");
// console.log(mani.getFullName());

// //method 2
// const gaurav = Object.create(personProtoTypes,{
//     firstName:{
//         value: "Gaurav"
//     },
//     lastName: {
//         value:"Kumar"
//     }
// });
// console.log(gaurav);
// console.log(gaurav.getFullName());
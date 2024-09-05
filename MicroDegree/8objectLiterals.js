////object literals
//one object
// const person = {
//     firstName : "sowndarya",
//     age: 25,
//     email : "sow@gmail.com",
//     hobbies : ["eat","sleep","code"],
//     address : {
//         city : "Bangalore",
//         state : "Karnataka",
//     },
//     getBirthYear: function(){
//         return 2024 - this.age;
//     }
// };

// let value;
// value = person;

// // console.log(value.address.city);
// console.log(value.getBirthYear())

//Array of Objects
const people = [
    {
        firstName: "sow",
        age: 25,
    },
    {
        firstName: "sowndarya",
        age: 24,
    },
    {
        firstName: "chuppi",
        age: 23,
    }
];

// console.log(people[0].firstName);
for(let i=0;i<people.length;i++){
    console.log(people[i].firstName);
}


 
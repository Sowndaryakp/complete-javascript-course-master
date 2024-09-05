////Arrays and its methods
//create some arrays
const numbers = [32,22,12,33,67,37,5];
// console.log(numbers);

const numbers2 = new Array(34,22,13,45,66);
// console.log(numbers2);

const fruits = ["Apple", "Orange", "Banana"];
// console.log(fruits);

const mixed = [22,"hello",true, undefined,null];
// console.log(mixed);

let val;

//get the array length
val = numbers.length;
// console.log(val);

//check if its an array
val = Array.isArray(numbers);

//get a single value
val = numbers[2];

//insert or replace
numbers[1] = 100;

//find the index value
val = numbers.indexOf(33);

//Mutating the array
//Add a number to the end of an array
numbers.push(290);
//Add to the front of the array
numbers.unshift(120);
//remove the last number from the array
numbers.pop();
//remove the first number from the array
numbers.shift();
//splicing
numbers.splice(1,2);
//reverse the array
numbers.reverse();
//concat the array
val = numbers.concat(numbers2);
//sort
val = fruits.sort();
val = numbers.sort();//32, 33, 37, 5, 67, //5 is like this comming so to below like that to do
//ascending order sorting
val = numbers.sort(function(x,y){
    return x - y;
});
//descending order sorting
val = numbers.sort(function(x,y){
    return y - x;
});


// console.log(numbers);
// console.log(val);
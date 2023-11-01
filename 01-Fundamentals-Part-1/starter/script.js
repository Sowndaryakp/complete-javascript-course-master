////values and variables, basic codes
/*let js='amazing';
// if(js==='amazing') alert('Js is Fun!');
console.log(45+5+20-5);
console.log("Sowndarya");
//numbers, letters, underscore, $
let firstName="Sonal";
console.log(firstName);

let sonal_mnp="SNp";
let $function=27;
let PI=3.1415;

let myFirstJob="programmer";
let myCurrentJob ="learner";
*/

////DataTypes
/*let javscriptIsFun = true;
console.log(javscriptIsFun);

console.log(typeof(true));
console.log(typeof javscriptIsFun);//boolean
console.log(typeof 23);//number
console.log(typeof 'Jonas');//string

javscriptIsFun = 'Yes!';
console.log(typeof javscriptIsFun);

let year;
console.log(year);//undefined
console.log(typeof year);//undefined

year = 1991;
console.log(typeof year);//number

console.log(typeof null);//object, its a bug or error
*/

////let, const and var
/*let age=30;
age=24;
console.log(age);

// const birthYear = 1999;
// birthYear = 2000;
// console.log(birthYear);// error occur bcz of const

var job='programmer';
job='teacher';

lastName = "KP";
console.log(lastName);*/

////Basic operators
//Math operators
/*const now=2037;
const ageSowndu = now - 1999;
const ageBaby = now - 2018;
console.log(ageSowndu, ageBaby);

console.log(ageSowndu * 2, ageBaby / 2, 2**3);
//2 ** 3 means 2 to the power of 3 = 2*2*2;

const firstName='Sowndarya';
const lastName='KP';
console.log(firstName+' '+lastName);

//Assignment operators
let x=10+5;// 15
x += 10;// x=x+10; // o/p->25
x *= 4; 
x++;
x--;
x--;
console.log(x);

//comparison operators
console.log(ageSowndu > ageBaby);//>, <, >=,<=
console.log(ageBaby>=18);
const isFullAge = ageBaby >= 18;
console.log(now-1999>now-2018);*/

////Operator Precedence
// to google it as mdn operator precedence
/*const now=2037;
const ageSowndu = now - 1999;
const ageBaby = now - 2018;
// console.log(ageSowndu,ageBaby);
console.log(now-1999>now-2018);
// console.log(25-10-5);//left to right -> 10

let x,y;
x=y=25-10-5;
console.log(x,y); 

const averageAge = (ageSowndu + ageBaby) / 2;
console.log(ageSowndu, ageBaby, averageAge);*/

////Strings and Template Literals
// const firstName="Sowndu ";
// const job="listener";
// const birthYear=1999;
// const year = 2037;
// const Sowndu = "I'm "+ firstName +',a '+ (year-birthYear)  + ' years old'+ job+'!';
// console.log(Sowndu);

// const sownduNew = `I'm ${firstName}, a ${year-birthYear} year old ${job}!`;
// console.log(sownduNew);

// console.log(`Just a regular string....`);
// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// multiple
// lines`);

////Taking Decisions: if / else statements
// const age=15;
// const oldAgeEnough = age>=19;
// if(oldAgeEnough){
//     console.log("Baby can start driving license");
// }
// else{
//     const yearsLeft = 18 -age;
//     console.log(`Baby is too young. Wait another ${yearsLeft} years:)`);
// }

// const birthYear = 1999;
// let century;
// if(birthYear <= 2000){
//     century =20;
// }else{
//     century=21;
// }
// console.log(century);

//Type Conversion and coercion
const inputYear = '1999';
console.log(Number(inputYear),inputYear);
console.log(Number(inputYear)+18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23));

// console.log(String(23));


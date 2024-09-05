////template literals
//we will be looking into new feature ES6
const username="sowndu";
const age1 = 23;
const job = "Fullstack Web Developer";
const city = "Bangalore";

// console.log(username);

//without using template literals, ES5, we are going to render HTML to browser with JS
html = "<ul><li>Name: " + username + 
        "</li><li>Age: " + age1 + 
        "</li><li>Job: " + job + 
        "</li><li>City: " + city + 
        "</li></ul>";

document.body.innerHTML = html;

//function
function hello(){
        return "hello js";
}
// with using Template literals(ES6)
html = `<ul>
        <li>Name: ${username} </li>
        <li>Age:  ${age1} </li>
        <li>Job:  ${job}</li>
        <li>City:  ${city} </li>
        <li>Function:  ${hello()} </li>
        </ul>`;

document.body.innerHTML = html;
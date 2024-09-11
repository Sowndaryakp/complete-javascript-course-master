// //////DOM(document object model)
// //window.document (to check in the browser console)


// //////DOM Examination


// /////DOM Selectors for Single Elements
// //////Single element selector
// // //1. document.getElementById() 
// console.log(document.getElementById("id-value"));
// console.log(document.getElementById("id-value").id);
// console.log(document.getElementById("id-value").className);

// //change style
// const idValue = document.getElementById("id-value");

// idValue.style.backgroundColor = "black";
// idValue.style.color = "white";
// idValue.style.padding = "5px";

// //Textcontent
// idValue.textContent = "Chow";
// idValue.innerText = "Chow";
// idValue.innerHTML = "<span style= color:red>Task List</span>";

// // //2. document.querySelector()
// console.log(document.querySelector("#id-value"));
// console.log(document.querySelector(".class-value"));
// console.log(document.querySelector("h5"));

// document.querySelector("li").style.color = "red";
// document.querySelector("li:last-child").style.color = "blue";
// document.querySelector("li:nth-child(2)").style.color = "orange";

// //////DOM Selectors for Multiple Elements
// //////Multiple element selector or selecting multiple elements
// // //1. document.getElementsByClassName
// const items = document.getElementsByClassname("class-value");
// console.log(items);

// items.style.backgroundColor = "green";
// items[0].style.color = "red";
// items[3].textContent = "white";
// items[3].style.textContent = "white";

// // //2. document.getElementsByTagName
// const items1 = document.getElementsByTagName("tags");
// console.log(items1);

// items1.style.backgroundColor = "green";
// items1[0].style.color = "red";
// items1[3].textContent = "white";
// items1[3].style.textContent = "white";

// // //3. document.querySelectorAll()-> return NodeList - no need to convert to an array
// const lis = document.querySelectorAll("tags.class-value");
// console.log(lis);

// lis.forEach(function(li){
//     li.textContent = "Hello";
// });

// const liOdd = document.querySelectorAll("li:nth-child(odd)");
// console.log(liOdd);

// liOdd.forEach(function(li){
//     li.style.backgroundColor = "#ccc";
// })

// ////DOM Traversing 
// const list = document.querySelector("ul.collection");
// const listItems = document.querySelector("li.collection-item");

// let valu;

// valu=list;

// //child nodes
// valu=list.childNodes;
// valu=list.children;

// valu = list.children[1].textContent = "hello";
// valu = list.children[2].children;
// valu = list.firstChild;
// valu = list.firstElementChild;

// //parent nodes
// valu=listItems;

// valu = listItems.parentNode;
// valu = listItems.parentElement;
// valu = listItems.parentElement.parentElement;

// //siblings
// valu = listItems.nextSibling;
// valu = listItems.nextElementSibling;

// valu = listItems.previousSibling;
// valu = listItems.previousElementSibling;

// // console.log(valu);
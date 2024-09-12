////EVENT BUBBLING
// document.querySelector(".card-title").addEventListener("click",function(){
//     console.log("Card-title clicked");
// });

// document.querySelector(".card-content").addEventListener("click",function(){
//     console.log("Card-content clicked");
// });

// document.querySelector(".card").addEventListener("click",function(){
//     console.log("Card clicked");
// });

// document.querySelector(".col").addEventListener("click",function(){
//     console.log("col clicked");
// });

////EVENT DELEGATION
//without delegation

// const delItem = document.querySelector(".remove-task");
// delItem.addEventListener("click",removeItem);

//body
// document.body.addEventListener("click", removeItem);

// function removeItem(e){
//     // console.log("Item Deleted");
//     // console.log(e);
//     // console.log(e.target);
//     if(e.target.parentElement.classList.contains("list-group-item")){
//         // console.log("delete-item");
//         e.target.parentElement.remove();
//     }

// }

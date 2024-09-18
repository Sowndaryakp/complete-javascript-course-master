// ////Local and Session Storage
// // localStorage.setItem("name","Sowndarya");
// // localStorage.setItem("age","24");
// //get Items
// // const name = localStorage.getItem("name");
// // console.log(name);

// //remove item
// // localStorage.removeItem("name");


// // sessionStorage.setItem("name","sonalshetty")
// // const name = sessionStorage.getItem("name");
// // console.log(name);

// //localstorage clear
// // localStorage.clear();


// ////add task 
// document.getElementById("task-form").addEventListener("submit",addtoLocal);

// function addtoLocal(e){
//     const task = document.getElementById("task").value;
//     // // console.log(task);
//     // localStorage.setItem("task",task);
//     // alert("task saved");
//     // // console.log(123);
//     // e.preventDefault();

//     let tasks;
//     if(localStorage.getItem("tasks")===null){
//         tasks = [];
//     }else{
//         tasks= JSON.parse(localStorage.getItem("tasks"));
//     }
//     tasks.push(task);

//     localStorage.setItem("tasks",JSON.stringify(tasks));
//     alert("Task saved");
//     e.preventDefault();
// }

// //get the values from local storage

//getting variable
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoFilter = document.querySelector(".filter-todo");

document.addEventListener("DOMContentLoaded", function(e){  // Corrected typo here
    getTodo();
    e.preventDefault();
});
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);
todoFilter.addEventListener("click",filterTodo);

function addTodo(e){
    //creating li element
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo";
    const todos = document.createElement("li");
    todos.className = "todo-item";
    setTodos(todoInput.value);

    todos.appendChild(document.createTextNode(todoInput.value));
    todoDiv.appendChild(todos);
    todoInput.value="";
    // console.log(todoDiv);

    //create complete-button
    const completeBtn = document.createElement("button");
    completeBtn.className = "complete-btn";
    completeBtn.innerHTML = '<img width="23" height="25" src="https://img.icons8.com/ios-filled/50/FFFFFF/instagram-check-mark.png" alt="instagram-check-mark"/>';
    todoDiv.appendChild(completeBtn);

    //creating trash-button
    const trashBtn = document.createElement("button");
    trashBtn.className = "trash-btn";
    trashBtn.innerHTML = '<img width="23" height="25" src="https://img.icons8.com/ios-filled/50/FFFFFF/delete-forever.png" alt="delete-forever"/>';
    todoDiv.appendChild(trashBtn);
    todoList.appendChild(todoDiv);
    
    e.preventDefault();
}

function deleteCheck(e){
    // console.log(e.target);
    //Delete functionalities
    const items = e.target;
    if(items.className === 'trash-btn'){
        const todo = items.parentElement;
        todo.classList.add("fall");
        removeTodo(todo);
        
        todo.addEventListener("transitionend", function(){
            todo.remove();
        });
    }

    //completed functionalists
    if(items.className === 'complete-btn'){
        const todo = items.parentElement;
        // console.log(todo)
        todo.classList.toggle("completed");
        // console.log(todo)
    }
    e.preventDefault();
}


function filterTodo(e){
    const todos= todoList.childNodes;
    console.log(todos);
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
               todo.style.display = "flex";
               break; 
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){      
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
            default:
                console.log(e.target.value);
        }
    })
    e.preventDefault();
}

//to set todo in localStorage
function setTodos(todo){
    let todos;
    if(localStorage.getItem('todos')=== null){
        todos = [];
    }else{
       todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodo(){
    let todos;
    if(localStorage.getItem('todos')=== null){
        todos = [];
    }else{
       todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){
        // console.log(todo);
        const todoDiv = document.createElement("div");
        todoDiv.className = "todo";
        const todos = document.createElement("li");
        todos.className = "todo-item";
    
        todos.appendChild(document.createTextNode(todo));
        todoDiv.appendChild(todos);
        todoInput.value="";
        // console.log(todoDiv);
    
        //create complete-button
        const completeBtn = document.createElement("button");
        completeBtn.className = "complete-btn";
        completeBtn.innerHTML = '<img width="23" height="25" src="https://img.icons8.com/ios-filled/50/FFFFFF/instagram-check-mark.png" alt="instagram-check-mark"/>';
        todoDiv.appendChild(completeBtn);
    
        //creating trash-button
        const trashBtn = document.createElement("button");
        trashBtn.className = "trash-btn";
        trashBtn.innerHTML = '<img width="23" height="25" src="https://img.icons8.com/ios-filled/50/FFFFFF/delete-forever.png" alt="delete-forever"/>';
        todoDiv.appendChild(trashBtn);
        todoList.appendChild(todoDiv);
        
    });
}

function removeTodo(todo){
    let todos;
    if(localStorage.getItem('todos')=== null){
        todos = [];
    }else{
       todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    // console.log(todoIndex);
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}

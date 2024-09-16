//getting variable
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);

function addTodo(e){
    //creating li element
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo";
    const todos = document.createElement("li");
    todos.className = "todo-item";
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
        todo.remove();
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
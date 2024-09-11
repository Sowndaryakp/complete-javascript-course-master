//   // Create the new task element (li)
//   const newTaskItem = document.createElement('li');

//   // Add class to the task item
//   newTaskItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

//   // Add id attribute to the task item
//   newTaskItem.id = 'task-' + taskText.toLowerCase().replace(/\s+/g, '-');

//   // Set a custom data attribute
//   newTaskItem.setAttribute('data-task', taskText);

//   // Create a text node for the task description
//   const textNode = document.createTextNode(taskText);

//   // Append the text node to the task item
//   newTaskItem.appendChild(textNode);







// window.onload = function() {
//     createTaskElement('microdegree');
//   };
  
//   function createTaskElement(taskText) {
//     const taskList = document.getElementById('taskList');
//     const newTaskItem = document.createElement('li');
//     newTaskItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
//     newTaskItem.id = 'task-' + taskText.toLowerCase().replace(/\s+/g, '-');
//     newTaskItem.setAttribute('data-task', taskText);
//     newTaskItem.appendChild(document.createTextNode(taskText));
  
//     const removeSpan = document.createElement('span');
//     removeSpan.classList.add('remove-task');
//     removeSpan.innerHTML = '&times;';
//     removeSpan.onclick = () => taskList.removeChild(newTaskItem);
    
//     newTaskItem.appendChild(removeSpan);
//     taskList.appendChild(newTaskItem);
//   }
  
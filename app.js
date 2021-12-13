// selector 
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
// event listener 
todoButton.addEventListener("click", addTodo);
// delete event listener 
todoList.addEventListener("click", deleteCheck);
// filtering todo list event listener 
filterOption.addEventListener("click", filterTodo)

// function 
function addTodo(eventHandler) {
    // prevent default event 
    eventHandler.preventDefault();

    if(todoInput.value == ""){
        alert("Please Enter The Value...")
    }else{
        // create a new todo div 
    const todoDiv = document.createElement("div");
    // new div classList add 
    todoDiv.classList.add("todo");
    // create a new li tag 
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // check mark button 
    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class='fas fa-check'></i>";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // check trash button 
    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    // appened to the list 
    todoList.appendChild(todoDiv)

    todoInput.value = '';
    }
}

// delete functionality 
function deleteCheck(e) {
    const Item = e.target;

    if (Item.classList[0] === "trash-btn") {
        const todo = Item.parentElement;
        // Animation add 
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function () {
            todo.remove();
        })
    }

    if (Item.classList[0] === "complete-btn") {
        const todo = Item.parentElement;
        todo.classList.toggle("completed")
    }

}
// filterOption functionality 
function filterTodo(FilterEvent) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (FilterEvent.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;   
        }
    })
}
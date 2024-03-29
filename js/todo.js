const toDoForm = document.getElementById("todo-form")
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list")

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newTodo) {
    const li = document.createElement("li")
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button")
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    console.log(li)
    toDoList.appendChild(li);
    saveToDos();
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

toDoForm.addEventListener("submit", handleTodoSubmit);



const savedToDos = localStorage.getItem(TODOS_KEY)
if(savedToDos !== null){
    const pasredToDos = JSON.parse(savedToDos);
    console.log(pasredToDos)
    pasredToDos.forEach((item) => console.log("hello!", item))
}
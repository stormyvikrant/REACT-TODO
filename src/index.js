import "./index.css";
//header
var header = document.getElementById("header");

//header heading
let heading = document.createElement("h1");
heading.innerHTML = "TODO LIST";
//heading.classList.add("classname" aayenge sarey)
heading.classList.add("redcolor",);

header.append(heading);

// logo part 
let logo = document.createElement("img");

logo.src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtVe4gMCR1w8HvOLU2ibivRuUnJ_qtQCem3g&usqp=CAU";

  //logo ki id assign ki 
  logo.setAttribute("id","logo")
header.append(logo);

// id ko call kiya hai
var addTodoData = document.getElementById("addTodoData");

// we create div
let addTodo = document.createElement("div");
//  inside div we just create one id 
addTodo.setAttribute("id", "addTodo");
//input box create 
let input = document.createElement("input");
input.setAttribute("id", "input_taking");
// create button
let btn = document.createElement("button");
btn.innerHTML = "Adding data ";
btn.addEventListener("click", () => {
  //the value has come from input taking 
  let value = document.getElementById("input_taking").value;
// we create local storage and the input has come which ispushed in todoData
  let todoList = JSON.parse(localStorage.getItem("todoData")) || [];
  todoList.push(value);
  localStorage.setItem("todoData", JSON.stringify(todoList));
  display(todoList);
});

addTodoData.append(input, btn);

addTodoData.append(addTodo);
let todoList = JSON.parse(localStorage.getItem("todoData")) || [];
display(todoList);
function display(data) {
  let displayTodo = document.getElementById("displayTodo");
  displayTodo.innerHTML = "";
  data.map((ele) => {
    let title = document.createElement("p");
    title.innerHTML = ele;
    displayTodo.append(title);
  });
}

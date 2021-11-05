// Select the text input
const task = document.querySelector("input")
const addButton = document.querySelector(".add")
const todolist = document.querySelector("#todolist")
const demo = document.querySelector(".demo")
var delButton = document.querySelector(".del")
var count = 0

//created function for adding tasks
function addTask(text) {
    if (task.value === '') {
        alert("Please write a task")
    }
    count++;
    var li = document.createElement("li");
    li.innerHTML += task.value;
    li.innerHTML += '<button class="del">✕</button>';
    todolist.appendChild(li);
    demo.innerHTML = `You have ${count} tasks to do`;
    task.value = "";
    // text.preventDefault();
}

//function for deleting tasks
function deleteTask(text) {
    if (text.target.className === "del") {
        text.target.parentElement.remove();
        count--;
    }
    if (count == 0) {
        demo.innerHTML = 'Task list is empty'
        count = 0;
    }
    else{
    demo.innerHTML = `You have ${count} tasks to do`;
    }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


//eventlisteners
addButton.addEventListener("click", addTask);
todolist.addEventListener("click", deleteTask);
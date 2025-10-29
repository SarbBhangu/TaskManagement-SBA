const nameInput = document.getElementById('taskName');
const categoryInput = document.getElementById('taskCategory');
const deadlineInput = document.getElementById('taskDeadline');
const statusInput = document.getElementById('taskStatus');
const addBtn = document.getElementById('addBtn');
const filterStatus= document.getElementById('filterStatus');
const filterCategory= document.getElementById('filterCategory');
const applyFiltersBtn= document.getElementById('applyFiltersBtn');
const resetFiltersBtn= document.getElementById('resetFiltersBtn');
const taskList= document.getElementById('taskList');

let tasks = [];

function addTask() {
    let newTask = nameInput.value;
    tasks.push(newTask);
    console.log(tasks);

    let newItem = document.createElement("li");
    newItem.textContent= newTask;
    taskList.appendChild(newItem);
    nameInput.value= "";
}
addBtn.addEventListener("click", addTask);
const nameInput = document.getElementById('taskName');
const categoryInput = document.getElementById('taskCategory');
const deadlineInput = document.getElementById('taskDeadline');
const statusInput = document.getElementById('taskStatus');
const addBtn = document.getElementById('addTaskBtn');
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
}
addBtn.addEventListener("click", addTask);
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
    let name = nameInput.value.trim();
    let category = categoryInput.value.trim();
    let deadline = deadlineInput.value;
    let status = statusInput.value;

    let newTask = {
        name: name,
        category: category,
        deadline: deadline,
        status: status
    };

    tasks.push(newTask);
    console.log(tasks);

}
addBtn.addEventListener("click", addTask);
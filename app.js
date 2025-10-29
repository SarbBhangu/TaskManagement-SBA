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
    displayTask();
}
addBtn.addEventListener("click", addTask);

function displayTask(){
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++){
        let item = document.createElement("li")
        item.innerHTML= `Task Name:${tasks[i].name}, Category: ${tasks[i].category},Deadline:${task[i].deadline}, Status:${tasks[i].status}`;

        taskList.appendChild(item);
    }
    }

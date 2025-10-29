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

    if (!name){
        alert('Task required');
        return;
    }

    let newTask = {
        name: name,
        category: category,
        deadline: deadline,
        status: status
    };

    tasks.push(newTask);
    console.log(tasks);
    displayTask();

    nameInput.value = "";
    categoryInput.value = "";
    deadlineInput.value = "";
    statusInput.value = "In Progress";
}
addBtn.addEventListener("click", addTask);

function displayTask(){
     taskList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let item = document.createElement("li");

    let statusOptions = "";
    if (tasks[i].status === "In Progress") {
      statusOptions = `
        <option selected>In Progress</option>
        <option>Completed</option>
      `;
    } else {
      statusOptions = `
        <option>In Progress</option>
        <option selected>Completed</option>
      `;
    }
   
    item.innerHTML = `
      Task Name: ${tasks[i].name}<br>
      Category: ${tasks[i].category}<br>
      Deadline: ${tasks[i].deadline}<br>
      Status:
      <select onchange="updateStatus(this, ${i})">
        ${statusOptions}
      </select>
    `;

    taskList.appendChild(item);
  }
}

    function updateStatus(selectOption, option) {
        let newStatus = selectOption.value;
        tasks[option].status = newStatus;
        console.log("Status changed to:", newStatus);

        displayTask()
    }

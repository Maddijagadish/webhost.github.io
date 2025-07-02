var addTaskButton = document.getElementById("add-button");
var taskInput = document.getElementById("input-task");
var ulTask = document.getElementById("task-list");

function task(){
    var taskText=taskInput.value.trim();
    if (taskText==""){
        alert("Invalid,Enter the task");
        return;
    }
    var listTask = document.createElement("li");
    var spanTask = document.createElement("span");
    var deleteBtn = document.createElement("button")
    spanTask.textContent = taskText;
    deleteBtn.textContent = "Delete";

    listTask.appendChild(spanTask);
    listTask.appendChild(deleteBtn);
    
    ulTask.appendChild(listTask);
    taskInput.value=""
    deleteBtn.addEventListener("click",deletetask);
}
function deletetask(e){
    console.log(e.target.parentNode.remove());
}
addTaskButton.addEventListener("click",task);
taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
    task();
    }
    })


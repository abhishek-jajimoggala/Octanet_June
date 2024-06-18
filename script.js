document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Add task
    addTaskBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    // Mark task as complete or incomplete
    taskList.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("completed");
        }
    });

    // Delete task
    taskList.addEventListener("click", function(e) {
        if (e.target.classList.contains("delete")) {
            e.target.parentNode.remove();
        }
    });

    function addTask(taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;
        const deleteBtn = document.createElement("span");
        deleteBtn.textContent = "❌";
        deleteBtn.classList.add("delete");
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }
});
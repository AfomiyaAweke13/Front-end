const inputBox = document.getElementById('input-box');
const listcontainer = document.getElementById('listcontainer');

function AddTask() {
    if (inputBox.value == '') {
        alert('You must write something');
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";  // This is the '×' character for a delete button

        // Append the span to the li
        li.appendChild(span);

        // Append the li to the list container
        listcontainer.appendChild(li);

        // Clear the input box after adding the task
        inputBox.value = "";
    }
    function showTask() {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
        tasks.forEach(task => {
            const li = document.createElement("li");
            li.innerHTML = task.text;
            if (task.completed) {
                li.classList.add('checked');  // Add 'checked' class if the task is marked as completed
            }
    
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";  // '×' for delete button
            li.appendChild(span);
            listcontainer.appendChild(li);
        });
    }
    listcontainer.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            const index = Array.from(listcontainer.children).indexOf(e.target);
            tasks[index].completed = e.target.classList.contains("checked");
    
            localStorage.setItem("tasks", JSON.stringify(tasks));
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            const index = Array.from(listcontainer.children).indexOf(e.target.parentElement);
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }, false);
    showTask();
}

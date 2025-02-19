const tasks = document.getElementById("inputContainer");
const taskList = document.getElementById("listcontainer");


function addTask(){
    if ( tasks.value === ""){
        alert("Please enter a Task!!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = tasks.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    tasks.value = ""; 
    saveData();
}

taskList.addEventListener("click",function(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("task1");
        saveData();
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("save", listcontainer.innerHTML);
}

function showData(){
    taskList.innerHTML = localStorage.getItem("save");
}
showData();
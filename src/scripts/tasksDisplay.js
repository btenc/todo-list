import taskList from "./tasksLogic";
//DOM Selectors
const taskBoard = document.querySelector("#task-board");

function addTaskFromInputs(){

}

function initDisplay(){
    taskBoard.innerHTML = "";

    taskList.taskList.forEach(function(item,index){
        console.log(item, index);
        let taskCard = document.createElement("div");
        taskCard.classList.add("task-card");

        let taskInfoContainer = document.createElement('div');
        taskInfoContainer.classList.add('task-info');

        let optionsContainer = document.createElement('div');
        optionsContainer.classList.add('options');

        taskCard.appendChild(taskInfoContainer);
        taskCard.appendChild(optionsContainer);

        let title = document.createElement('h2');
        title.textContent = item.title;
        let description = document.createElement('p');
        description.textContent = item.description;
        let dueDate = document.createElement('p');
        dueDate.textContent = item.dueDate;
        let priority = document.createElement('p');
        priority.textContent = item.priority;
        taskCard.classList.add(item.priority);

        taskInfoContainer.appendChild(title);
        taskInfoContainer.appendChild(description);
        taskInfoContainer.appendChild(dueDate);

        let progress = createProgressItem(item);
        let remove = createRemoveItem(index);

        optionsContainer.appendChild(remove);
        optionsContainer.appendChild(progress);
        optionsContainer.appendChild(priority);

        taskBoard.appendChild(taskCard);
    });
}

function createProgressItem(item){
    let progressButton = document.createElement("button");
    progressButton.classList.add("button", "progress-button");
    progressButton.textContent = item.progress;

    progressButton.addEventListener("click", ()=>{
        if(item.progress == "Incomplete"){
            item.progress = "Complete";
            progressButton.textContent = "Complete";
        }
        else{
            item.progress = "Incomplete";
            progressButton.textContent = "Incomplete";  
        }
        initDisplay();
    });
    return progressButton;
}

function createRemoveItem(index) {
    let rmButton = document.createElement("button");
    rmButton.classList.add("button", "remove-button");
    rmButton.textContent = "Remove";
    rmButton.addEventListener("click", () => {
      taskList.removeTask(index);
      initDisplay();
    });
  
    return rmButton;
}

export default initDisplay;

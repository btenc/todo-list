import taskList from "./tasksLogic";
//DOM Selectors
const taskBoard = document.querySelector("#task-board");
const titleInput = document.querySelector("#title");
const descriptionInput = document.querySelector("#description");
const dateInput = document.querySelector("#due-date");
const priorityInput = document.querySelector("#priority");
const priorityOutput = document.querySelector("#priority-output");
const submitButton = document.querySelector("#submit-button");
const cancelButton = document.querySelector("#cancel-button");
const toggleButtons = document.querySelectorAll(".toggle-buttons");
const resetButton = document.querySelector("#reset-button");
const form = document.querySelector("#add-task-form");

(function listenersIIFE() {
  submitButton.addEventListener("click", () => {
    addTaskFromInputs();
    toggleHidden();
    resetForm();
    validateForm();
  });

  resetButton.addEventListener("click", () => {
    resetForm();
    validateForm();
  });

  const toListen = [titleInput, descriptionInput, dateInput];
  for (let i = 0; i < 3; i++) {
    console.log(toListen[i]);
    toListen[i].addEventListener("keyup", () => {
      validateForm();
    });
    toListen[i].addEventListener("change", () => {
      validateForm();
    });
  }

  priorityInput.addEventListener("change", () => {
    priorityOutput.innerHTML = priorityInput.value;
  });
})();

function validateForm() {
  if (
    titleInput.checkValidity() == true &&
    descriptionInput.checkValidity() == true &&
    dateInput.checkValidity() == true
  ) {
    submitButton.disabled = false;
  } else if (
    titleInput.checkValidity() == false ||
    descriptionInput.checkValidity() == false ||
    dateInput.checkValidity() == false
  ) {
    submitButton.disabled = true;
  }
}

function addTaskFromInputs() {
  let title = titleInput.value;
  let description = descriptionInput.value;
  let dueDate = dateInput.value;
  let priority = priorityInput.value;

  taskList.addTask(title, description, dueDate, priority, "Incomplete");
  initDisplay();
}

function initDisplay() {
  taskBoard.innerHTML = "";

  taskList.taskList.forEach(function (item, index) {
    console.log(item, index);
    let taskCard = document.createElement("div");
    taskCard.classList.add("task-card");

    let taskInfoContainer = document.createElement("div");
    taskInfoContainer.classList.add("task-info");

    let optionsContainer = document.createElement("div");
    optionsContainer.classList.add("options");

    taskCard.appendChild(taskInfoContainer);
    taskCard.appendChild(optionsContainer);

    let title = document.createElement("h2");
    title.textContent = item.title;
    let description = document.createElement("p");
    description.textContent = item.description;
    let dueDate = document.createElement("p");
    dueDate.textContent = item.dueDate;
    let priority = document.createElement("p");
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

function createProgressItem(item) {
  let progressButton = document.createElement("button");
  progressButton.classList.add("button", "progress-button");
  progressButton.textContent = item.progress;

  progressButton.addEventListener("click", () => {
    if (item.progress == "Incomplete") {
      item.progress = "Complete";
      progressButton.textContent = "Complete";
    } else {
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

function toggleHidden() {
    //todo
}

function resetForm() {
  form.reset();
}

export default initDisplay;

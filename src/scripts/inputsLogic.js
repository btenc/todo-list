import taskList from "./tasksLogic";
import initDisplay from "./tasksDisplay";

//DOM Selectors
const titleInput = document.querySelector("#title");
const descriptionInput = document.querySelector("#description");
const dateInput = document.querySelector("#due-date");
const priorityInput = document.querySelector("#priority");
const priorityOutput = document.querySelector("#priority-output");
const submitButton = document.querySelector("#submit-button");
const cancelButton = document.querySelector("#cancel-button");
const toggleButtons = document.querySelectorAll(".toggle-buttons");
const resetButton = document.querySelector("#reset-button");

const sortByPriority = document.querySelector("#priority-sort");
const sortByDate = document.querySelector("#date-sort");

const form = document.querySelector("#add-task-form");
const applyFilterButton = document.querySelector("#apply-button");

function listenersInit() {
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

  applyFilterButton.addEventListener("click", () => {
    taskList.filter = document.querySelector('input[name="filter"]:checked').value;
    console.log(taskList.filter);
    initDisplay();
  });

  sortByPriority.addEventListener("click",()=>{
    taskList.sortType = "priority";
    initDisplay();
  });

  sortByDate.addEventListener("click",()=>{
    taskList.sortType = "date";
    initDisplay();
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
}

function addTaskFromInputs() {
  let title = titleInput.value;
  let description = descriptionInput.value;
  let dueDate = dateInput.value;
  let priority = priorityInput.value;

  taskList.addTask(title, description, dueDate, priority, "Incomplete");
  taskList.sortBy();
  initDisplay();
}

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

function toggleHidden() {
    //todo
}

function resetForm() {
  form.reset();
}

export default listenersInit;

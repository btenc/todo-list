class Tasks {
  constructor() {
    this.taskList = [];
    this.sortType = "date";
    this.filter = "all-tasks";
  }

  getTask(index) {
    return this.taskList[index];
  }
  getTitle(index) {
    return this.taskList[index].title;
  }
  getDescription(index) {
    return this.taskList[index].description;
  }
  getDueDate(index) {
    return this.taskList[index].dueDate;
  }
  getPriority(index) {
    return this.taskList[index].priority;
  }
  getProgress(index) {
    return this.taskList[index].progress;
  }
  getSortType() {
    return this.sortType;
  }

  changePriority(index, set) {
    this.taskList[index].priority = set;
    this.updateLocalStorage();
  }
  changeProgress(index, set) {
    this.taskList[index].progress = set;
    this.updateLocalStorage();
  }

  addTask(title, description, dueDate, priority, progress) {
    let task = new Task(title, description, dueDate, priority, progress);
    this.taskList.push(task);
    this.updateLocalStorage();
  }
  removeTask(index) {
    this.taskList.splice(index, 1);
    this.updateLocalStorage();
  }

  sortTasks() {
    if (this.sortType == "date") {
      this.taskList.sort(this.sortDates);
    } else if (this.sortType == "priority") {
      this.taskList.sort(this.sortPriority);
    }
    this.updateLocalStorage();
  }

  sortDates(a, b) {
    if (a.dueDate < b.dueDate) {
      return -1;
    }
    if (a.dueDate > b.dueDate) {
      return 1;
    }
    return 0;
  }

  sortPriority(a, b) {
    if (a.priority > b.priority) {
      return -1;
    }
    if (a.priority < b.priority) {
      return 1;
    }
    return 0;
  }

  updateLocalStorage() {
    localStorage.setItem("taskArr", JSON.stringify(this.taskList));
  }
}

class Task {
  constructor(title, description, dueDate, priority, progress) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.progress = progress;
  }
}

function getLocalStorage() {
  function pullFromStorage() {
    if (!localStorage.getItem("taskArr")) {
      taskList.addTask(
        "Temporary Task",
        "this is a temporary task to get you started!",
        "2099-05-08",
        1,
        "Incomplete"
      );
      localStorage.setItem("taskArr", JSON.stringify(taskList));
    } else {
      cleanData();
    }
  }
  function cleanData() {
    let taskArr = JSON.parse(localStorage.getItem("taskArr"));
    for (let i = 0; i < taskArr.length; i++) {
      taskList.addTask(
        taskArr[i].title,
        taskArr[i].description,
        taskArr[i].dueDate,
        taskArr[i].priority,
        taskArr[i].progress
      );
    }
  }
  pullFromStorage();
}

const taskList = new Tasks();
getLocalStorage();

export default taskList;

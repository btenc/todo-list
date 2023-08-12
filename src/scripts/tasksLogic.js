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
  }
  changeProgress(index, set) {
    this.taskList[index].progress = set;
  }

  addTask(title, description, dueDate, priority, progress) {
    let task = new Task(title, description, dueDate, priority, progress);
    this.taskList.push(task);
  }
  removeTask(index) {
    this.taskList.splice(index, 1);
  }

  sortTasks() {
    if (this.sortType == "date") {
      this.taskList.sort(this.sortDates);
    } else if (this.sortType == "priority") {
      this.taskList.sort(this.sortPriority);
    }
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
    console.log("test");
    if (a.priority > b.priority) {
      return -1;
    }
    if (a.priority < b.priority) {
      return 1;
    }
    return 0;
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

const taskList = new Tasks();
taskList.addTask("Wordfsk", "do work", "2025-01-05", 3, "Incomplete");
taskList.addTask("Wordfsk", "do work", "2022-02-05", 2, "Incomplete");
taskList.addTask("Wordfsk", "do work", "2022-06-05", 5, "Incomplete");
taskList.addTask("Wordfsk", "do work", "2022-03-05", 1, "Incomplete");
taskList.addTask("Wordfsk", "do work", "2021-01-05", 9, "Incomplete");

export default taskList;

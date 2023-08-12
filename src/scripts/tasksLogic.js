class Tasks{
    constructor(){
        this.taskList = [

        ];
    }

    getTask(index){
        return this.taskList[index];
    }
    getTitle(index){
        return this.taskList[index].title;
    }
    getDescription(index){
        return this.taskList[index].description;
    }
    getDueDate(index){
        return this.taskList[index].dueDate;
    }
    getPriority(index){
        return this.taskList[index].priority;
    }
    getProgress(index){
        return this.taskList[index].progress;
    }

    changePriority(index, set){
        this.taskList[index].priority = set;
    }
    changeProgress(index, set){
        this.taskList[index].progress = set;
    }

    addTask(title, description, dueDate, priority, progress){
        let task = new Task(title, description, dueDate, priority, progress);
        this.taskList.push(task);
    }
    removeTask(index){
        this.taskList.splice(index,1);
    }
}

class Task{
    constructor(title, description, dueDate, priority, progress){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.progress = progress;
    }
}

const taskList = new Tasks();
taskList.addTask("Wordfsk","do work", "11/3/23", 3, "Incomplete");
taskList.addTask("Wordfsk","do work", "11/3/23", 3, "Incomplete")
taskList.addTask("Wordfsk","do work", "11/3/23", 3, "Incomplete")
taskList.addTask("Wordfsk","do work", "11/3/23", 3, "Incomplete")

export default taskList;
function LS() {
  LS.prototype.fetchTask = function () {};
  let tasks = JSON.parse(localStorage.getItem("tasks"));

  if (tasks) {
    tasks = tasks;
  } else {
    tasks = [];
  }


}

LS.prototype.storeTask = function (task) {
  localStorage.setItem("tasks", JSON.stringify(task));
  let tasks = this.fetchTask();
  tasks?.unshift(task);
};
LS.prototype.deleteTask = function (id) {
  let tasks = this.fetchTask();
  let index = Array(tasks).findIndex((task) => task?.id === id);
  Array(tasks).splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

LS.prototype.completeTask = function (id) {
    let tasks = this.fetchTask()
    let index  = Array(tasks).findIndex((task) => task.id === id)
    if(tasks[index].isComplete) {
        tasks[index].isComplete = false
    }else {
        tasks[index].isComplete = true
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

export default LS;

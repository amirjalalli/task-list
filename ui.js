import LS from "./ls.js";

function UI() {}
const ls = new LS();

UI.prototype.showAllTasks = function () {
  let tasks = ls.fetchTask();
  let newHtml = "";
  Array(tasks).forEach((task) => {
    newHtml = `
        <div class="add-task-content" data-createdat="${task.id}">
        <input type="text" class="input" ${task?.isComplete ? 'checked' : ""}/>
        <label class="input">${task.title}</lable>
        <div class="btn-content">
          <button class="update-add btn">Add Task</button>
        </div>
        <div class="btn-content" style="display: none;">
          <button class="update-btn btn">Eddit Task</button>
          <button class="cancel-add btn">Cancel</button>
        </div>
      </div>
            `;
  });
};

UI.prototype.addToUI = function (task) {
  ls.storeTask(task);
  let newHtml = `
    <div class="task-card" data-created="${task?.id}">
       <div class="checkbox" ${task?.isComplete ? 'checked' : ""} >
            <input type="checkbox" ${task?.isComplete ? 'checked' : ""}/>
            <p>${task?.title}</p>
        </div>
        <div>
            <button class="btn-edite btn btn-ed">Edite</button>
            <button class="btn-delete btn btn-del ">Delet</button>
        </div>
    </div>
       `;
  document
    .querySelector(".create-task")
    .insertAdjacentHTML("afterbegin", newHtml);
};
UI.prototype.resetForm = function () {
  document.querySelector(".input").value = "";
};

UI.prototype.deleteTask = function (x) {
  console.log("e.traget", x.target);
  const task = x?.target?.parentElement?.parentElement;
  const id = task.dataset.createdat;
  ls.deleteTask(id);
  task.remove();
};
UI.prototype.compeleteTask = function (e) {
  const task = e?.target?.parentElement?.parentElement;
  const id = task.dataset.createdat;
  ls.completeTask(id);
  task.classList.toggle("completed");
};

export default UI;

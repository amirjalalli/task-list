import UI from "./ui.js"
import Task from "./task.js"
import LS from "./ls.js"


const ui  = new UI()

document.querySelector(".update-add").addEventListener("click", (e) => {
    const textTitle = document.querySelector(".input").value

    if(textTitle.trim().length > 0) {
        const task = new Task(textTitle);
        ui.addToUI(task)
        ui.resetForm()
        console.log(task)
    }
})


document.querySelector(".task-card").addEventListener("click",(e) => {
    
    if(e.target.className.includes('btn-del') ) {
        console.log(e)
        ui.deleteTask(e)
    }
    if(e.target.className.includes("task-check")) {
        ui.compeleteTask(e)
    }

})
// import {renderTasks, tasks} from './render.js'
import { updateTask } from './update.js'
import { createTask } from './create.js'


const listElem = document.querySelector(".list");
listElem.addEventListener('click', updateTask)

const btnCreate = document.querySelector(".create-task-btn")
btnCreate.addEventListener("click", createTask);


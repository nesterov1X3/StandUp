import {renderTasks, tasks} from './render.js'


export function createTask() {
    const input = document.querySelector(".task-input");

    if (!input.value) {
      return;
    }
    const count = tasks.length + 1;
    tasks.push({
      text: input.value,
      done: false,
      createDate: new Date().toISOString(),
      id: count.toString(),
      finishDate: null
    });
    document.querySelector(".task-input").value = "";
    renderTasks(tasks);
  }
  
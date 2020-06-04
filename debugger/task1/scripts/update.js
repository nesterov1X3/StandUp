import {renderTasks, tasks} from './render.js'


export function updateTask(event) {

    const isCheckbox = event.target.classList.contains("list__item-checkbox");
    if (!isCheckbox) {
      return;
    }
    const taskData = tasks.find((task) => task.id == event.target.dataset.id);
    Object.assign(taskData, {
      done: event.target.checked,
      finishDate: new Date().toISOString(),
    });
    
    renderTasks(tasks);
  }
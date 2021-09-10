const taskEl = document.querySelector('#tasks');

const getTasks = async() => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
}
const Addtasks = async() => {
   const tasks = await getTasks();
   tasks.forEach((task) => {
    const div = document.createElement('div')
    div.className = 'task'
    div.innerHTML = `
      <h3>${task.title}</h3>
      <ul>
        <li><strong>Deadline: </strong> ${task.date}</li>
        <li><strong>Task Brief: </strong> ${task.brief}</li>
      </ul>
      <h4><strong>Stack to be used : </strong></h4>
      <div class="tags">${task.tags}</div>
    `
    taskEl.appendChild(div)
   });
}
Addtasks();
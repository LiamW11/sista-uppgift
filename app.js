// Array för att lagra tasks
let tasks = [];

// Hämta element
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const taskContainer = document.getElementById('task-container');

// Lägg till task
function addTask(e) {
  e.preventDefault();
  
  const task = {
    id: Date.now(),
    name: nameInput.value ? nameInput.value : "Namnlös",
    age: ageInput.value,
    completed: false
  };
  
  tasks.push(task);
  saveTasks();
  renderTasks(); 
  document.getElementById("age-output").value = 0;
  
  nameInput.value = '';
  ageInput.value = 0;
}

// Lyssna på form submit
form.addEventListener('submit', addTask);

// Rendera tasks
function renderTasks() {
  taskContainer.innerHTML = '';
  
  tasks.forEach(task => {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task-item';
    taskDiv.innerHTML = `
      <div>
        <strong>${task.name}</strong> - Ålder: ${task.age}
      </div>
      <div>
        <button onclick="toggleComplete(${task.id})">Klar</button>
        <button onclick="deleteTask(${task.id})">Ta bort</button>
      </div>
    `;
    
    if (task.completed) {
      taskDiv.style.textDecoration = 'line-through';
      taskDiv.style.opacity = '0.6';
    }
    
    taskContainer.appendChild(taskDiv);
  });
}

function toggleComplete(id) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.completed = !task.completed;
    saveTasks();
    renderTasks();
  }
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
    saveTasks();
  renderTasks();
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const saved = localStorage.getItem('tasks');
  if (saved) {
    tasks = JSON.parse(saved);
    renderTasks();
  }
}

loadTasks();
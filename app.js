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
    name: nameInput.value,
    age: ageInput.value,
    completed: false
  };
  
  tasks.push(task);
  
  nameInput.value = '';
  ageInput.value = 0;
}

// Lyssna på form submit
form.addEventListener('submit', addTask);
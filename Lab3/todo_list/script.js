const input = document.querySelector('#todo-input');
const addButton = document.querySelector('#add-btn');
const todoList = document.querySelector('#todo-list');

function createTodo() {
  const taskText = input.value.trim();
  
  if (taskText === '') return;

  const li = document.createElement('li');
  li.className = 'todo-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '🗑'; 
  deleteBtn.className = 'delete-btn';

  checkbox.addEventListener('change', () => {
    span.classList.toggle('done');
  });


  deleteBtn.addEventListener('click', () => {
    todoList.removeChild(li);
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  input.value = '';
}

addButton.addEventListener('click', createTodo);

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    createTodo();
  }
});
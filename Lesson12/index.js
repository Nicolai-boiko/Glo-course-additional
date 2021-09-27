const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');

let todoData = JSON.parse(localStorage.getItem('todoItems')) || [];

const render = function () {
    todoList.textContent = '';
    todoCompleted.textContent = '';

    todoData.forEach((item, i) => {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = `<span class="text-todo">${item.value}</span>
			<div class="todo-buttons">
				<button class="todo-remove"></button>
				<button class="todo-complete"></button>
			</div>
        `;

        if (item.completed) {
            todoCompleted.append(li);
        } else if (item.value.trim() === '') {
            return;
        } else {
            todoList.append(li);
            headerInput.value = '';
        };

        const btnTodoComplete = li.querySelector('.todo-complete');
        btnTodoComplete.addEventListener('click', () => {
            item.completed = !item.completed;
            localStorage.setItem('todoItems', JSON.stringify(todoData));
            render();
        });
        const btnTodoRemove = li.querySelector('.todo-remove');
        btnTodoRemove.addEventListener('click', () => {
            todoData.splice(i, 1);
            localStorage.setItem('todoItems', JSON.stringify(todoData));
            render();
        });
    });
};

todoControl.addEventListener('submit', (e) => {
    e.preventDefault();

    const newTodo = {
        value: headerInput.value,
        completed: false,
    };
    if (headerInput.value.trim() === '') {
        return;
    } else {
        todoData.push(newTodo);
        localStorage.setItem('todoItems', JSON.stringify(todoData));
    };
    render();
});


render();
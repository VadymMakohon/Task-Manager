function addTask() {
    const taskInput = document.getElementById('task');
    const dueDateInput = document.getElementById('due-date');
    const tasksList = document.getElementById('tasks');

    if (taskInput.value === '') {
        alert('Please enter a task');
        return;
    }

    const li = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = `${taskInput.value} (Due: ${dueDateInput.value})`;

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.onclick = () => li.classList.toggle('completed');

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = () => tasksList.removeChild(li);

    li.appendChild(checkBox);
    li.appendChild(taskText);
    li.appendChild(removeButton);
    tasksList.appendChild(li);

    taskInput.value = '';
    dueDateInput.value = '';
}
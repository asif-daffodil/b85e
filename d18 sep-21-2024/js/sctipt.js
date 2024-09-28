const myForm = document.querySelector('#myForm');
const taskList = document.querySelector('#taskList');

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(myForm);
    const taskName = formData.get('taskName');
    const div = document.createElement('div');
    div.textContent = taskName;
    taskList.appendChild(div);
    myForm.reset();
});
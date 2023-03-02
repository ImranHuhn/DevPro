const plusIcon = document.querySelector('.plus-icon');
const garbageIcon = document.querySelector('.garbage-icon');
const todoList = document.querySelector('.todoapp-body__list');
const todoInput = document.querySelector('.todoapp-body__input');

const taskArrayList = JSON.parse(localStorage.getItem('taskArrayList')) || [];
const taskObjectItem = {
    id: 0,
    taskName: '',
    completed: false
}

function addItem() {
    if(todoInput.value !== '') {
        taskObjectItem.id++;
        taskObjectItem.taskName = todoInput.value;

        taskArrayList.push(taskObjectItem);
        console.log(taskObjectItem)
        localStorage.setItem('taskArrayList', JSON.stringify(taskArrayList));

        // console.log(taskObjectItem)
    }
}

function renderUi() {
    taskArrayList.map((itemInArray) => {
        itemInArray;
        console.log(itemInArray);
    })
}

window.addEventListener('load', renderUi);
plusIcon.addEventListener('click', addItem);

/* 
-create variable that gets data from local storage and default to 'empty task' list
-set local storage with key of task and value of task and value of the variable declared above
-event listeners for:
-plus button
-garabage icon
-checkbox
*/
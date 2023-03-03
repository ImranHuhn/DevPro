const plusIcon = document.querySelector('.plus-icon');
const garbageIcon = document.querySelector('.garbage-icon');
const todoList = document.querySelector('.todoapp-body__list');
const todoInput = document.querySelector('.todoapp-body__input');

const taskArrayList = JSON.parse(localStorage.getItem('taskArrayList')) || [];
let id = 0;

function init() {
    render();
    addItem();
    deleteItem();
    completedItem();
};

function addItem() {
    plusIcon.addEventListener('click', () => {
        if(todoInput.value !== '') {
            const obj = {
                currId: id++,
                task: '',
                complete: false
            }

            obj.task = todoInput.value;
            todoInput.value = '';
            
            taskArrayList.push(obj);
            localStorage.setItem('taskArrayList', JSON.stringify(taskArrayList));
            
            render();
        }
    });
};

function deleteItem() {
    todoList.addEventListener('click', (e) => {
        if(e.target.classList.value.includes('garbage-icon')) {
            const className = e.target.classList.value.split(' ');
            const classId = parseInt(className[0].replace('garbageId', ''));
            const targetIndex = taskArrayList.map((item) => {return item.currId}).indexOf(classId);
            
            taskArrayList.splice(targetIndex, 1);
            localStorage.setItem('taskArrayList', JSON.stringify(taskArrayList));
        }
        render()
    });
};

function completedItem() {
    todoList.addEventListener('click', (e) => {
        const checkbox = document.getElementById(e.target.id); // output: input tag
        const checkboxIdName = e.target.id; // output: id name 
        const checkboxId = parseInt(checkboxIdName.replace('task', '')); // output: id number
        const targetIndex = taskArrayList.map((item) => {return item.currId}).indexOf(checkboxId);

        if(e.target.checked === true) {
            checkbox.setAttribute("checked", "checked");
            
            taskArrayList[targetIndex].complete = true;
            localStorage.setItem('taskArrayList', JSON.stringify(taskArrayList));
        } else {
            checkbox.removeAttribute("checked");

            taskArrayList[targetIndex].complete = false;
            localStorage.setItem('taskArrayList', JSON.stringify(taskArrayList));
        }
        render()
    });
};

function render() {
    todoList.innerHTML = '';
    taskArrayList.map((item) => {
        todoList.innerHTML += `
        <li class="todoapp-body__items">
            <div>
                <input id="task${item.currId}" class="task" type="checkbox" ${item.complete === true ? `checked="checked"` : ``}>
                <label for="task${item.currId}">${item.task}</label>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="garbageId${item.currId} garbage-icon w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </div>
        </li>`
    });
};

window.addEventListener('load', init);
const plusIcon = document.querySelector('.plus-icon');
const garbageIcon = document.querySelector('.garbage-icon');
const todoList = document.querySelector('.todoapp-body__list');
const todoInput = document.querySelector('.todoapp-body__input');

let taskArrayList = JSON.parse(localStorage.getItem('taskArrayList')) || [];

function addItem() {
    plusIcon.addEventListener('click', (e) => {
        e.preventDefault();
        if(todoInput.value !== '') {
            const obj = {
                currId: new Date(),
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

function render() {
    todoList.innerHTML = '';
    taskArrayList.forEach((item) => {
        todoList.innerHTML += `
        <li class="todoapp-body__items">
            <div>
                <input id="taskId${item.currId}" class="task" type="checkbox" ${item.complete === true ? `checked="checked"` : ``}>
                <label for="task${item.currId}">${item.task}</label>
            </div>
            <div>
                <svg id="garbageId-${item.currId}" class="garbage-icon w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </div>
        </li>`
    });
    
    document.querySelectorAll('.garbage-icon').forEach(el => {
        el.addEventListener('click', () => {
            const uiId = el.id.replace('garbageId-', '');
            taskArrayList = taskArrayList.filter((item) => {return item.currId != uiId}); // must use !=. if using !==, it gets buggy
            
            localStorage.setItem('taskArrayList', JSON.stringify(taskArrayList));
            render();
        });
    });

    document.querySelectorAll('.task').forEach(el => {
        el.addEventListener('click', () => {
            const uiId = el.id.replace('taskId', '');
            let targetObject = taskArrayList.filter((item) => {return item.currId == uiId})[0];

        if(targetObject.complete === false) {
            el.removeAttribute("checked");
            
            targetObject.complete = true;
            localStorage.setItem('taskArrayList', JSON.stringify(taskArrayList));
        } else {
            el.setAttribute("checked", "checked");

            targetObject.complete = false;
            localStorage.setItem('taskArrayList', JSON.stringify(taskArrayList));
        }

        });
    });

    addItem();
};

window.addEventListener('load', render);
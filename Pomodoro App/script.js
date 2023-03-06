const plusButton = document.querySelector(".plus-button");
const todoList = document.querySelector(".todoapp-body__list");
const todoInput = document.querySelector(".todoapp-body__input");
const todoPriority = document.querySelector(".todoapp-body__priority");
const inputInTodoList = document.querySelector(".input-in-todolist");

let toDoArrayList = JSON.parse(localStorage.getItem("toDoArrayList")) || [];

function render() {
  todoList.innerHTML = "";
  toDoArrayList.forEach((item) => {
    todoList.innerHTML += `
    <li>
        <label for="task">
            <input id="taskId${item.currId}" class="task" type="checkbox" ${item.completed === true ? `checked="checked"` : ``}>
            <input class="input-in-todolist" value="${item.task}" type="text" placeholder="Edit">
        </label>
        <button id="deleteId-${item.currId}" class="delete-button">Delete</button>
        <button class="pmdr-button" id="pmdrId-${item.currId}">PMDR</button>
    </li>`;
  });

  // sort list by for ui only, not data
  document.querySelectorAll(".sort-list").forEach((el) => {
    el.addEventListener("click", () => {
        switch(el.id) {
            case "priority":
                toDoArrayList = toDoArrayList.sort((a,b) => a.priority - b.priority);
                break;
            case "completed":
                toDoArrayList = toDoArrayList.sort((a,b) => b.completed - a.completed);
                break;
            default: // sort by most recent
                toDoArrayList = toDoArrayList.sort((a,b) => a.currId - b.currId);
                break;
        }
        render();
    });
  });


  // delete item
  document.querySelectorAll(".delete-button").forEach((el) => {
    el.addEventListener("click", () => {
        
        const uiId = parseInt(el.id.replace("deleteId-", ""));
        toDoArrayList = toDoArrayList.filter((item) => item.currId !== uiId); 

        localStorage.setItem("toDoArrayList", JSON.stringify(toDoArrayList));
        render();
    });
  });


  // check completed item
  document.querySelectorAll(".task").forEach((el) => {
    el.addEventListener("click", () => {
      const uiId = parseInt(el.id.replace("taskId", ""));

      toDoArrayList = toDoArrayList.map((item) => {
        if (item.currId === uiId) {
          item.completed = !item.completed;
        }
        return item;
      });
      
      localStorage.setItem("toDoArrayList", JSON.stringify(toDoArrayList));
      render();
    });
  });


  // add item
  plusButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (todoInput.value && todoPriority.value !== "") {
        const obj = {
          currId: new Date().getTime(),
          task: todoInput.value,
          completed: false,
          priority: todoPriority.value
        };
    
        todoInput.value = "";
        todoPriority.value = "";
    
        toDoArrayList.push(obj);
        localStorage.setItem("toDoArrayList", JSON.stringify(toDoArrayList));
        render();
    }
  });

  // pmdr button
  document.querySelectorAll(".pmdr-button").forEach((el) => {
    el.addEventListener("click", (e) => {
      
      const pmdrId = parseInt(e.target.id.replace("pmdrId-", "")); // html id
      
      toDoArrayList.map((item) => { // data id
        if(item.currId !== pmdrId) return;
        pomodoroTitle.innerHTML = `<h2>Working on: ${item.task}</h2>`;
        pomodoroComment.classList.remove("display-none");
      })
    });
  });

};

window.addEventListener("load", render);

//////////////////////////////////////////
// pomodoro section
const pomodoroTitle = document.querySelector(".pomodoro-title");
const pomodoroComment = document.querySelector(".pomodoro-timer__comments");
const startButton = document.querySelector(".pomodoro-timer__start-button");

// start button for pomodoro
startButton.addEventListener("click", () => {
  console.log("clicked start")
});


// while the start button is active, cycle between 25 min pododoro and 5 short breaks infinitely
// for every 4 rounds, do 15 min long breaks

//////////////

// reset button >pomodoro section

// edit "pomodoro:" >pomodoro section

// edit "short break:" >pomodoro section

// edit "long break:" >pomodoro section

// edit "pomodoro rounds:" >pomodoro section

// count down timer "25:00" >pomodoro section

// edit task name >todo section
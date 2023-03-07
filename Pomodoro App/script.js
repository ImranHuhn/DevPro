const plusButton = document.querySelector(".plus-button");
const todoList = document.querySelector(".todoapp-body__list");
const todoInput = document.querySelector(".todoapp-body__input");
const todoPriority = document.querySelector(".todoapp-body__priority");
const inputInTodoList = document.querySelector(".input-in-todolist");
const pomoMinutes = document.querySelector(".pomodoro-minutes");
const pomoSeconds = document.querySelector(".pomodoro-seconds");


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
const timerDisplay = document.querySelector(".pomodoro-timer");

// start button for pomodoro
startButton.addEventListener("click", () => {
  const resetSeconds = 59;
  const resetPomodoro = 3;
  const resetShort = 5;
  const resetLong = 15;
  const resetRounds = 4;
  let seconds = resetSeconds;
  let pomodoro = resetPomodoro;
  let short = resetShort;
  let long = resetLong;
  let rounds = resetRounds;
  
  pomodoroRounds();

  function pomodoroRounds() {
    if(rounds > 0) {
      --rounds;
      console.log(rounds);
      totalPomodoro();
    } else {
      rounds = resetRounds;
      longBreak();
    }
  };


  /////////////////////

  // function intervalTimers(timer, reset, callback, fn) {

  //   pomoMinutes.innerText = (timer <= 10 ? "0" + --timer : --timer);
  //   pomoSeconds.innerText = (seconds < 10 ? "0" + seconds-- : seconds--);
    
  //   const interval = setInterval(() => {
  //     if(seconds > 0) {
  //       pomoSeconds.innerText = (seconds < 10 ? "0" + --seconds : --seconds);
  //     } else if (timer !== 0 && seconds === 0) {
  //       seconds = resetSeconds;
  //       clearInterval(interval);
  //       callback;
  //     } else {
  //       seconds = resetSeconds;
  //       timer = reset;
  //       clearInterval(interval);
  //       fn;
  //     }
  //   }, 100);
  // };

  ///////////////////

  function totalPomodoro() {
    
    console.log("total")

    pomoMinutes.innerText = (pomodoro <= 10 ? "0" + --pomodoro : --pomodoro);
    pomoSeconds.innerText = (seconds < 10 ? "0" + seconds-- : seconds--);
    
    const interval = setInterval(() => {
      if(seconds > 0) {
        pomoSeconds.innerText = (seconds < 10 ? "0" + --seconds : --seconds);
      } else if (pomodoro !== 0 && seconds === 0) {
        seconds = resetSeconds;
        clearInterval(interval);
        totalPomodoro();
      } else {
        seconds = resetSeconds;
        pomodoro = resetPomodoro;
        clearInterval(interval);
        shortBreak();
      }
    }, 100);
  };


  function shortBreak() {
    
    console.log('short')
    
    pomoMinutes.innerText = (short <= 10 ? "0" + --short : --short);
    pomoSeconds.innerText = (seconds < 10 ? "0" + seconds-- : seconds--);
    
    const interval = setInterval(() => {
      if(seconds > 0) {
        pomoSeconds.innerText = (seconds < 10 ? "0" + --seconds : --seconds);
      } else if (short !== 0 && seconds === 0) {
        seconds = resetSeconds;
        clearInterval(interval);
        shortBreak();
      } else {
        seconds = resetSeconds;
        short = resetShort;
        clearInterval(interval);
        pomodoroRounds();
      }
    }, 100);
  };


  function longBreak() {

    console.log('long')
    
    pomoMinutes.innerText = (long <= 10 ? "0" + --long : --long);
    pomoSeconds.innerText = (seconds < 10 ? "0" + seconds-- : seconds--);
    
    const interval = setInterval(() => {
      if(seconds > 0) {
        pomoSeconds.innerText = (seconds < 10 ? "0" + --seconds : --seconds);
      } else if (long !== 0 && seconds === 0) {
        seconds = resetSeconds;
        clearInterval(interval);
        longBreak();
      } else {
        seconds = resetSeconds;
        long = resetLong;
        clearInterval(interval);
        pomodoroRounds();
      }
    }, 100);
  };


});


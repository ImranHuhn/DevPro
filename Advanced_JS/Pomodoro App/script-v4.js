const plusButton = document.querySelector(".plus-button");
const todoList = document.querySelector(".todoapp-body__list");
const todoInput = document.querySelector(".todoapp-body__input");
const todoPriority = document.querySelector(".todoapp-body__priority");
const inputInTodoList = document.querySelector(".input-in-todolist");

let toDoArrayList = JSON.parse(localStorage.getItem("toDoArrayList")) || [];

function render() {
  todoList.innerHTML = "";
  preset();
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

  // "sort list by" for ui only, not data
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

////////////////////////////////////////////////////////////////////////////////////////
// pomodoro section
////////////////////////////////////////////////////////////////////////////////////////

const pomodoroTitle = document.querySelector(".pomodoro-title");
const pomodoroComment = document.querySelector(".pomodoro-timer__comments");
const pomodoroCurrentCycle = document.querySelector(".pomodoro-timer__cycle");
const startButton = document.querySelector(".pomodoro-timer__start-button");
const pauseButton = document.querySelector(".pomodoro-timer__pause-button");  
const resetButton = document.querySelector(".pomodoro-timer__reset-button");
const timerDisplay = document.querySelector(".pomodoro-timer");
const pomodoroInput = document.querySelector("#pomodoro-total");
const shortBreakInput = document.querySelector("#short-break");
const longBreakInput = document.querySelector("#long-break");
const roundsInput = document.querySelector("#pomodoro-rounds");
const pomoMinutes = document.querySelector(".pomodoro-minutes");
const pomoSeconds = document.querySelector(".pomodoro-seconds");
const resetSeconds = 60;
let seconds = resetSeconds; 
let resetRounds;
let aPomodoro; 
let interval;
let rounds;
let short; 
let long;

let pressedPause = false;
let pausedSeconds;

// displays minutes and seconds in ui
function formatTimer() {
  pomoMinutes.innerText = Math.floor(totalSeconds / seconds).toString().padStart(2,"0");
  pomoSeconds.innerText = (totalSeconds % seconds).toString().padStart(2,"0");
};

// shows start button after pressing pause or reset and clears interval
function displayStartButton() {
  startButton.classList.remove("display-none");
  pauseButton.classList.add("display-none");
  clearInterval(interval);
};

// collect input users put in or set to default when preset start
function captureInputs() {
  aPomodoro = (pomodoroInput.value !== "" ? parseInt(pomodoroInput.value) : 25);
  short = (shortBreakInput.value !== "" ? parseInt(shortBreakInput.value) : 5);
  long = (longBreakInput.value !== "" ? parseInt(longBreakInput.value) : 15);
  resetRounds = (roundsInput.value !== "" ? parseInt(roundsInput.value) : 4);
  rounds = resetRounds;
}

function calculateTotalSeconds(type) {
  totalSeconds = (pressedPause === true ? totalSeconds = pausedSeconds : totalSeconds = type * seconds);
}

// initial setup/resets for UI
function preset() {
  pressedPause = false;

  pomodoroComment.classList.add("display-none");
  pomodoroCurrentCycle.classList.add("display-none");

  pomodoroInput.value = "";
  shortBreakInput.value = "";
  longBreakInput.value = "";
  roundsInput.value = "";
  pomoMinutes.innerText = "00";
  pomoSeconds.innerText = "00";

  displayStartButton();
};

function pause() {
  pressedPause = true;
  pausedSeconds = totalSeconds;
  clearInterval(interval);
};

// this will only be used in pomodoro function to determine which break is executed.
// made this because when rounds are done, short break moves on to long break which is a total of 20 min with defalt
function breakManager() {
  if(rounds > 0) {
    breakTimer(short);
  } else {
    rounds = resetRounds;
    breakTimer(long);
  }
};

// function for short break(5 min default) and long break(15 min default) unless either of the input is filled when start is pressed
function breakTimer(type) {
  pomodoroCurrentCycle.innerText = "Break";

  calculateTotalSeconds(type);
  
  interval = setInterval(() => {

    totalSeconds--;

    if(totalSeconds >= 0) {
      formatTimer();
    } else {
      clearInterval(interval);
      pomodoro();
    }
  }, 100);
};

// executes pomodoro that is default to 25 minutes if no input when start button is pressed
function pomodoro() {
  startButton.classList.add("display-none");
  pauseButton.classList.remove("display-none");
  pomodoroComment.classList.remove("display-none");
  pomodoroCurrentCycle.classList.remove("display-none");
  pomodoroComment.innerText = "Time to work!";
  pomodoroCurrentCycle.innerText = "Rounds Left: " + rounds;
  
  calculateTotalSeconds(aPomodoro);
  
  interval = setInterval(() => {
    
    totalSeconds--;
    
    if(totalSeconds >= 0) {
      formatTimer();
    } else {
      rounds--;
      clearInterval(interval);
      breakManager();
    }
  }, 100);
};

// when start button is pressed, it will call preset that collect input if any or sets to default.
// then starts pomodoro's timer with some text changes in ui
startButton.addEventListener("click", () => {
  captureInputs();
  pomodoro();
});

// if pause is pressed first and reset is pressed after, start button will be visible from display start button function
// after reset is pressed, it calls preset to reset everything as if start button was never pressed
resetButton.addEventListener("click", () => {
  preset();
});

// when paused is pressed, capture the total seconds into variable and clear interval
pauseButton.addEventListener("click", () => {
  pause();
  displayStartButton();
});
const plusButton = document.querySelector(".plus-button");
const todoList = document.querySelector(".todoapp-body__list");
const todoInput = document.querySelector(".todoapp-body__input");
const todoPriority = document.querySelector(".todoapp-body__priority");
const inputInTodoList = document.querySelector(".input-in-todolist");

let toDoArrayList = JSON.parse(localStorage.getItem("toDoArrayList")) || [];

function render() {
  displayPreset();
  todoList.innerHTML = "";
  toDoArrayList.forEach((item) => {
    todoList.innerHTML += `
    <li>
        <label for="task">
            <input id="taskId${item.currId}" class="task" type="checkbox" ${
      item.completed === true ? `checked="checked"` : ``
    }>
            <input class="input-in-todolist" value="${
              item.task
            }" type="text" placeholder="Edit">
        </label>
        <button id="deleteId-${
          item.currId
        }" class="delete-button">Delete</button>
        <button class="pmdr-button" id="pmdrId-${item.currId}">PMDR</button>
    </li>`;
  });

  // "sort list by" for ui only, not data
  document.querySelectorAll(".sort-list").forEach((el) => {
    el.addEventListener("click", () => {
      switch (el.id) {
        case "priority":
          toDoArrayList = toDoArrayList.sort((a, b) => a.priority - b.priority);
          break;
        case "completed":
          toDoArrayList = toDoArrayList.sort(
            (a, b) => b.completed - a.completed
          );
          break;
        default:
          // sort by most recent
          toDoArrayList = toDoArrayList.sort((a, b) => a.currId - b.currId);
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

      toDoArrayList.map((item) => {
        // data id
        if (item.currId !== pmdrId) return;
        pomodoroTitle.innerHTML = `<h2>Working on: ${item.task}</h2>`;
        pomodoroComment.classList.remove("display-none");
      });
    });
  });
}

window.addEventListener("load", render);

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
let secondsInAMinute = resetSeconds;
let isBreak = false;
let isPause = false;
let pausedSeconds;
let resetRounds;
let aPomodoro;
let aShortBreak;
let aLongBreak;
let timerInterval;
let roundsLeft;
let totalSeconds;

startButton.addEventListener("click", () => {
  getInputOrDefaultValues();
  startTimerFor(aPomodoro);
});

function getInputOrDefaultValues() {
  aPomodoro = pomodoroInput.value !== "" ? parseInt(pomodoroInput.value) : 1;
  aShortBreak =
    shortBreakInput.value !== "" ? parseInt(shortBreakInput.value) : 2;
  aLongBreak = longBreakInput.value !== "" ? parseInt(longBreakInput.value) : 3;
  resetRounds = roundsInput.value !== "" ? parseInt(roundsInput.value) : 3;
  roundsLeft = isPause ? roundsLeft : resetRounds - 1;
}

function startTimerFor(type) {
  displayTimerFor(type);
  timerInterval = setInterval(() => {
    totalSeconds--;
    if (isBeforeFinalPomodoro()) {
      breakTimerFor(aShortBreak);
    } else if (isAfterFinalPomodoro()) {
      roundsLeft = resetRounds;
      breakTimerFor(aLongBreak);
    } else if (isAfterAnyBreak()) {
      isBreak = false;
      clearInterval(timerInterval);
      startTimerFor(aPomodoro);
    } else {
      displayCountDown();
    }
  }, 100);
}

function displayTimerFor(type) {
  if (isBreak === true) {
    displayPauseButton();
    pomodoroCurrentCycle.innerText = "Break Time";
    getTotalSecondsFor(type);
  } else {
    displayPauseButton();
    pomodoroComment.classList.remove("display-none");
    pomodoroCurrentCycle.classList.remove("display-none");
    pomodoroComment.innerText = "Time to work!";
    pomodoroCurrentCycle.innerText = "Round: " + (roundsLeft + 1);
    getTotalSecondsFor(type);
  }
}

function getTotalSecondsFor(type) {
  totalSeconds = isPause ? pausedSeconds : type * secondsInAMinute;
  isPause = false;
}

function isBeforeFinalPomodoro() {
  return totalSeconds < 0 && isBreak === false && roundsLeft > 0;
}

function isAfterFinalPomodoro() {
  return totalSeconds < 0 && isBreak === false && roundsLeft <= 0;
}

function isAfterAnyBreak() {
  return totalSeconds < 0 && isBreak;
}

function breakTimerFor(type) {
  roundsLeft--;
  isBreak = true;
  clearInterval(timerInterval);
  startTimerFor(type);
}

function displayCountDown() {
  pomoMinutes.innerText = Math.floor(totalSeconds / secondsInAMinute)
    .toString()
    .padStart(2, "0");
  pomoSeconds.innerText = (totalSeconds % secondsInAMinute)
    .toString()
    .padStart(2, "0");
}

function displayPauseButton() {
  startButton.classList.add("display-none");
  pauseButton.classList.remove("display-none");
}

resetButton.addEventListener("click", displayPreset);

function displayPreset() {
  pomodoroComment.classList.add("display-none");
  pomodoroCurrentCycle.classList.add("display-none");
  pomodoroInput.value = "";
  shortBreakInput.value = "";
  longBreakInput.value = "";
  roundsInput.value = "";
  pomoMinutes.innerText = "00";
  pomoSeconds.innerText = "00";
  displayStartButton();
}

pauseButton.addEventListener("click", getPausedSeconds);

function getPausedSeconds() {
  isPause = true;
  pausedSeconds = parseInt(totalSeconds);
  clearInterval(timerInterval);
  displayStartButton();
}

function displayStartButton() {
  startButton.classList.remove("display-none");
  pauseButton.classList.add("display-none");
  clearInterval(timerInterval);
}

/*//////////////////////////////////////////////////////////
clean-code:
-functions should only do one thing
-function name should say what it does
-function to check boolean value use "has, is, or a true/false statement"
-put conditionals in a function and use a descriptive function name in the conditional statement
-avoid negative conditionals
-keep the invoked functions directly above the originally created function
*/

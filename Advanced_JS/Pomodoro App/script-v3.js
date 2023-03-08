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

//////////////////////////////////////////
// pomodoro section

const pomodoroTitle = document.querySelector(".pomodoro-title");
const pomodoroComment = document.querySelector(".pomodoro-timer__comments");
const pomodoroCurrentCycle = document.querySelector(".pomodoro-timer__cycle");
const startButton = document.querySelector(".pomodoro-timer__start-button");
const pauseButton = document.querySelector(".pomodoro-timer__pause-gitbutton");  
const resetButton = document.querySelector(".pomodoro-timer__reset-button");
const timerDisplay = document.querySelector(".pomodoro-timer");
const pomodoroInput = document.querySelector("#pomodoro-total");
const shortBreakInput = document.querySelector("#short-break");
const longBreakInput = document.querySelector("#long-break");
const roundsInput = document.querySelector("#pomodoro-rounds");


startButton.addEventListener("click", () => {

  const resetSeconds = 60;
  const resetPomodoro = (pomodoroInput.value !== "" ? parseInt(pomodoroInput.value) : 25);
  const resetShort = (shortBreakInput.value !== "" ? parseInt(shortBreakInput.value) : 5);
  const resetLong = (longBreakInput.value !== "" ? parseInt(longBreakInput.value) : 15);
  const resetRounds = (roundsInput.value !== "" ? parseInt(roundsInput.value) : 4);
  let seconds = resetSeconds;
  let pomodoro = resetPomodoro;
  let short = resetShort;
  let long = resetLong;
  let rounds = resetRounds;

  
  startButton.classList.add("display-none");
  pauseButton.classList.remove("display-none");

  
  function startTimerWith(timer) {
    pomoMinutes.innerText = (timer <= 10 ? "0" + timer : timer);
  }


  function startSeconds() {
    pomoSeconds.innerText = (seconds <= 10 ? "0" + --seconds : --seconds);
  }


  function resetSecondsAndInterval(intervalName) {
    seconds = resetSeconds;
    clearInterval(intervalName);
  }


  function breaks() {
    if(rounds > 0) {
      shortBreak();
    } else {
      rounds = resetRounds;
      longBreak();
    }
  };


  function longBreak() {
    pomodoroCurrentCycle.innerText = "Long Break"
    
    startTimerWith(--long);
    startSeconds();
    
    const interval = setInterval(() => {
      
      pauseBtn(interval);
      resetBtn(interval);
      
      if(seconds > 0) {
        startSeconds();
      } else if (long !== 0 && seconds === 0) {
        resetSecondsAndInterval(interval);
        longBreak();
      } else {
        resetSecondsAndInterval(interval);
        long = resetLong;
        totalPomodoro();
      }
    }, 100);
  };


  function shortBreak() {
    pomodoroCurrentCycle.innerText = "Short Break"
    
    startTimerWith(--short);
    startSeconds();
    
    const interval = setInterval(() => {
      
      pauseBtn(interval);
      resetBtn(interval);
      
      if(seconds > 0) {
        startSeconds();
      } else if (short !== 0 && seconds === 0) {
        resetSecondsAndInterval(interval);
        shortBreak();
      } else {
        resetSecondsAndInterval(interval);
        short = resetShort;
        totalPomodoro();
      }
    }, 100);
  };


  function totalPomodoro() {
    pomodoroComment.classList.remove("display-none");
    pomodoroComment.innerText = "Time to work!"
    pomodoroCurrentCycle.classList.remove("display-none");
    pomodoroCurrentCycle.innerText = "Rounds Left: " + rounds;
    
    startTimerWith(--pomodoro);
    startSeconds();
    
    const interval = setInterval(() => {
      
      pauseBtn(interval);
      resetBtn(interval);
      
      if(seconds > 0) {
        startSeconds();
      } else if (pomodoro !== 0 && seconds === 0) {
        resetSecondsAndInterval(interval);
        totalPomodoro();
      } else {
        resetSecondsAndInterval(interval);
        rounds--;
        pomodoro = resetPomodoro;
        breaks();
      }
    }, 100);
  };


  function resetBtn(intervalName) {
    resetButton.addEventListener("click", () => {
      
      pomodoro = resetPomodoro;
      short = resetShort;
      long = resetLong;
      rounds = resetRounds;
      
      pomodoroComment.classList.add("display-none");
      pomodoroCurrentCycle.classList.add("display-none");
      startButton.classList.remove("display-none");
      pauseButton.classList.add("display-none");
      
      pomoMinutes.innerText = 25;
      pomoSeconds.innerText = "00";
      startButton.innerText = "start";
      pomodoroInput.value = "";
      shortBreakInput.value = "";
      longBreakInput.value = "";
      roundsInput.value = "";
      
      clearInterval(intervalName);
    })
  }
  
  
  function pauseBtn(intervalName) {
    pauseButton.addEventListener("click", () => {
      startButton.classList.remove("display-none");
      pauseButton.classList.add("display-none");
      clearInterval(intervalName);
    })
  }

  totalPomodoro();
  
});


// todo:
  //pause pomodoro
    // clear interval then subtract min and seconds then save into variable
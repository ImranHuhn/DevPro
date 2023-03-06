const plusButton = document.querySelector(".plus-button");
const deleteButton = document.querySelector(".delete-button");
const todoList = document.querySelector(".todoapp-body__list");
const todoInput = document.querySelector(".todoapp-body__input");
const todoPriority = document.querySelector(".todoapp-body__priority");

let toDoArrayList = JSON.parse(localStorage.getItem("toDoArrayList")) || [];

function render() {
  todoList.innerHTML = "";
  toDoArrayList.forEach((item) => {
    todoList.innerHTML += `
    <li>
        <label for="task">
            <input id="taskId${item.currId}" class="task" type="checkbox" ${item.completed === true ? `checked="checked"` : ``}>
            <input value="${item.task}" type="text" placeholder="Edit">
        </label>
        <button id="deleteId-${item.currId}" class="delete-button">Delete</button>
        <button>PMDR</button>
    </li>`;
  });


//   sort list by for ui only, not data
  document.querySelectorAll(".sort-list").forEach((el) => {
    el.addEventListener("click", () => {
        switch(el.id) {
            case "priority":
                // console.log("pri")

                toDoArrayList = toDoArrayList.sort((a,b) => {
                    b.priority - a.priority
                });
                render();

                console.log(toDoArrayList)
                break;
            case "completed":
                toDoArrayList = toDoArrayList.filter((item) => item.completed === true)
                render();
                break;
            default:
                console.log("rec")
                //recent here
                break;
        }
    })
  })


  // delete item
  document.querySelectorAll(".delete-button").forEach((el) => {
    el.addEventListener("click", () => {
        
        const uiId = el.id.replace("deleteId-", ""); // removed parseInt because it will only return a year ex: 2023. delete button won't work for next line
        toDoArrayList = toDoArrayList.filter((item) => item.currId != uiId); 

        localStorage.setItem("toDoArrayList", JSON.stringify(toDoArrayList));
        render();
    });
  });


  // check completed item
  document.querySelectorAll(".task").forEach((el) => {
    el.addEventListener("click", () => {
      const uiId = el.id.replace("taskId", "");

      toDoArrayList = toDoArrayList.map((item) => {
        if (item.currId == uiId) {
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
          currId: new Date(),
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
}

window.addEventListener("load", render);

//////////////////////////////////////////
document.querySelector(".test").addEventListener("click", () => {
    console.log(document.querySelector(".sort-by-recent").checked)
})

const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", addTodo);

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText === "") return;

  const li = document.createElement("li");
  const textSpan = document.createElement("span");
  textSpan.textContent = todoText;

  const actions = document.createElement("div");
  actions.classList.add("actions");

  const readBtn = createButton("Mark as Read", markAsRead);
  const editBtn = createButton("Edit", editTodo);
  const deleteBtn = createButton("Delete", deleteTodo);

  actions.append(readBtn, editBtn, deleteBtn);
  li.append(textSpan, actions);
  todoList.appendChild(li);

  todoInput.value = "";
}

function createButton(text, eventHandler) {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", eventHandler);
  return button;
}

function markAsRead(event) {
  const li = event.target.closest("li");
  const textSpan = li.querySelector("span");

  if (li.classList.contains("read")) {
    li.classList.remove("read");
    event.target.textContent = "Mark as Read";
  } else {
    li.classList.add("read");
    event.target.textContent = "Unread";
  }
}

function editTodo(event) {
  const li = event.target.closest("li");
  if (li.classList.contains("read")) {
    alert("This todo is marked as read and cannot be edited.");
    return;
  }

  const textSpan = li.querySelector("span");
  const newText = prompt("Update your todo:", textSpan.textContent);

  if (newText !== null && newText.trim() !== "") {
    textSpan.textContent = newText.trim();
  }
}

function deleteTodo(event) {
  const li = event.target.closest("li");
  todoList.removeChild(li);
}

const body = document.getElementById("body-div");
const inputArea = document.getElementById("taskInput");
const addButton = document.getElementById("addTaskBtn");
const ul = document.getElementById("taskList");

function addTask() {
  const inputText = inputArea.value.trim();
  if (inputText === "") return;

  const li = document.createElement("li");
  li.innerText = inputText;

  const dltButton = document.createElement("button");
  dltButton.innerText = "X";
  dltButton.addEventListener("click", () => {
    ul.removeChild(li);
  });

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  ul.appendChild(li);
  li.appendChild(dltButton);
  inputArea.value = "";
}

addButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

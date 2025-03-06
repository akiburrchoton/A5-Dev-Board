document.getElementById("task-cards"),
  addEventListener("click", function (event) {
    event.preventDefault;

    if (event.target.id === "completed-button") {
      // Reduce the Task Assigned
      let taskAssigned = document.getElementById("task-assigned");
      taskAssigned.innerText -= 1;

      //   Disable the Complete Button
      event.target.disabled = true;
      event.target.classList.add("disabled:bg-[#9ba8f8]");

      //   Increase the Total Task Completed Number
      let totalCompletedTask = document.getElementById("total-completed-tasks");
      totalCompletedTask.innerText = parseInt(totalCompletedTask.innerText) + 1;

      // Create List and Add in Activity Log Section
      const completedTaskList = this.document.getElementById(
        "completed-task-list"
      );

      const completedTask = this.document.createElement("p");

      const taskTitle =
        event.target.parentNode.parentNode.parentNode.children[0].children[1]
          .innerText;
      const time = dateAndTime("time");
      completedTask.innerHTML = `
            <p class="font-primary bg-light-background px-2 py-3 rounded-xl mb-6">
              You have Completed The Task <span class="font-bold text-primary"> ${taskTitle}</span> at
              <span>${time}</span>
            </p>
            `;
      completedTaskList.appendChild(completedTask);
    }
  });

document.getElementById("clear-button").addEventListener("click", function () {
  document.getElementById("completed-task-list").innerHTML = "";
});

dateAndTime("date");
function dateAndTime(status) {
  const now = new Date();

  const currentTime = now.toLocaleTimeString();

  const weekDay = now.toLocaleDateString("en-US", { weekday: "short" });
  const dayNumber = now.toLocaleDateString("en-US", { day: "numeric" });
  const month = now.toLocaleDateString("en-US", { month: "short" });
  const year = now.toLocaleDateString("en-US", { year: "numeric" });
  let formattedDate = weekDay + ", " + month + " " + dayNumber + " " + year;

  if (status === "time") {
    return currentTime;
  } else if (status === "date") {
    let currentDate = document.getElementById("current-date");
    currentDate.innerText = formattedDate;
  }
}

document.getElementById("discover-new").addEventListener("click", function () {
  console.log(this);
  window.location.href = "./answers.html";
});

document.getElementById("theme-btn").addEventListener("click", function () {
  let body = document.body;
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  body.className = "bg-[" + randomColor + "]";
});

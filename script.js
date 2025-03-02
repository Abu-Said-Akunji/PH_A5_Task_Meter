const navigateToNew = document.querySelector("#explore-today");
if (navigateToNew) {
    navigateToNew.addEventListener("click", () => {
        window.location.assign("blogs.html");
    });
}

const returnToDesk = document.querySelector("#back-to-home");
if (returnToDesk) {
    returnToDesk.addEventListener("click", () => {
        window.location.assign("index.html");
    });
}

const generateRandomHex = () => {
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
    return `#${randomHex}`;
};

document.querySelector("#theme-toggle").addEventListener("click", () => {
    document.body.style.backgroundColor = generateRandomHex();
});

// let totalTasks = 6;
// let completedTasks = 23;
// const completedTaskCount = document("#task-counter");
// const assignedTaskCount = document.querySelector("#task-count");
// const completedButtons = document.querySelectorAll(".task-completed");
// const logContainer = document.querySelector("#activity-log-message-container");

// const getFormattedTime = () => {
//     return new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });
// };

// if (completedButtons) {
//     completedButtons.forEach((button) => {
//         button.addEventListener("click", function (event) {
//             if (!this.disabled) {
//                 alert("Board Updated Successfully");
//                 if (totalTasks > 0) {
//                     totalTasks--;
//                     completedTasks++;
//                 }
//                 if (assignedTaskCount && completedTaskCount) {
//                     assignedTaskCount.textContent = totalTasks;
//                     completedTaskCount.textContent = completedTasks;
//                 }

//                 const taskName = this.closest(".task-col").querySelector(".task-title").textContent;
//                 const logEntry = document.createElement("p");
//                 logEntry.classList.add("bg-bg-light", "p-2.5", "rounded-lg", "mb-7");
//                 logEntry.textContent = `Task '${taskName}' completed at ${getFormattedTime()}`;
//                 logContainer.appendChild(logEntry);

//                 this.disabled = true;

//                 if (totalTasks === 0) {
//                     alert("Congratulations! All tasks are now completed.");
//                 }
//             }
//         });
//     });
// }
let pendingTasks = 6;
let finishedTasks = 23;
const finishedTasksEl = document.getElementById("task-counter");
const pendingTasksEl = document.getElementById("task-count");
const taskButtons = document.querySelectorAll(".task-completed");
const logContainer = document.getElementById("activity-log-message-container");

const getFormattedTime = () => {
    let time = new Date();
    return time.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });
};

if (taskButtons) {
    for (let btn of taskButtons) {
        btn.addEventListener("click", function (event) {
            if (!this.disabled) {
                alert("Task board has been completed successfully!");
                if (pendingTasks > 0) {
                    pendingTasks--;
                    finishedTasks++;
                }
                if (pendingTasksEl && finishedTasksEl) {
                    pendingTasksEl.textContent = pendingTasks;
                    finishedTasksEl.textContent = finishedTasks;
                }

                let taskTitle = this.closest(".task-card").querySelector(".task-title").textContent;
                const logEntry = document.createElement("p");
                logEntry.classList.add("bg-bg-light", "p-2.5", "rounded-lg", "mb-7");
                logEntry.textContent = `Task '${taskTitle}' was marked complete at ${getFormattedTime()}`;
                logContainer.appendChild(logEntry);

                this.disabled = true;

                if (pendingTasks === 0) {
                    alert("Well done! You've completed all tasks.");
                }
            }
        });
    }
}


const clearLogButton = document.querySelector("#clear-task-log-btn");
if (clearLogButton) {
    clearLogButton.addEventListener("click", () => {
        logContainer.innerHTML = "";
    });
}

const updateCurrentDate = () => {
    const now = new Date();
    document.querySelector("#day").innerText = now.toLocaleDateString("en-US", { weekday: "short" });
    document.querySelector("#fullDate").innerText = now.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
};
updateCurrentDate();

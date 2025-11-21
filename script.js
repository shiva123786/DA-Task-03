/* ------------------ DARK / LIGHT MODE ------------------ */

const modeBtn = document.getElementById("modeToggle");

modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Button Text Change
    if (document.body.classList.contains("dark-mode")) {
        modeBtn.textContent = "Switch to Light Mode ☀️";
    } else {
        modeBtn.textContent = "Switch to Dark Mode 🌙";
    }
});


/* ------------------ FORM VALIDATION ------------------ */

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("❗ Please fill out all fields before submitting.");
    } else {
        alert("✅ Thank you! Your message has been submitted.");
        this.reset();
    }
});


/* ------------------ COUNTER FEATURE ------------------ */

let count = 0;

function increaseCounter() {
    count++;
    document.getElementById("counterValue").textContent = count;
}


/* ------------------ TASK MANAGER (WEEK 3 PROJECT) ------------------ */

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();

    if (text === "") {
        alert("⚠ Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        ${text}
        <button class="completeBtn">✔</button>
        <button class="deleteBtn">🗑</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";

    // Mark task as complete
    li.querySelector(".completeBtn").addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Delete task
    li.querySelector(".deleteBtn").addEventListener("click", () => {
        li.remove();
    });
});

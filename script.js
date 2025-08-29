// Part 1: JS Basics
let age = 18; 
let message;

if (age >= 18) {
    message = "You are eligible to vote ✅";
} else {
    message = "You are not old enough to vote ❌";
}
console.log(message);

let isStudent = true;
let studentRecord = null;
let studentMarks; 
let students = ['weston', 'hailey', 'rose'];

console.log(isStudent);
console.log(studentRecord);
console.log(studentMarks);
console.log(students);

// Part 2: JS Functions
function calculateTotal(price, quantity) {
    return price * quantity;
}
function showTotal() {
    let total = calculateTotal(300, 4);
    console.log("Total price = " + total);
}

function greetUser(name) {
    console.log("Hello, " + name + "! 👋");
}

// Part 3: JS Loops
function showCountdown() {   // ✅ fixed name
    for (let w = 10; w > 0; w--) {
        console.log(w);
    }
}

function listHobbies() {
    let hobbies = ["Flying ✈️", "Coding 💻"];
    hobbies.forEach((hobby) => console.log("I love " + hobby));
}

// Part 4: DOM Manipulation
document.getElementById("toggleBtn").addEventListener("click", function() {
    let text = document.getElementById("paragraph");
    if (text.style.display === "none") {
        text.style.display = "block";
        console.log("Paragraph shown");
    } else {
        text.style.display = "none";
        console.log("Paragraph hidden");
    }
});

document.getElementById("colorBtn").addEventListener("click", function() {
    let intro = document.getElementById("intro");
    intro.style.color = intro.style.color === "red" ? "darkblue" : "red";
    console.log("Intro color changed");
});

document.getElementById("addItemBtn").addEventListener("click", function() {
    let newItem = document.createElement("p");
    newItem.textContent = "A new item was added dynamically";
    document.body.appendChild(newItem);
    console.log("New item added to the page");
});

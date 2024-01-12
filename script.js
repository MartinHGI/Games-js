let colors = [];
let pickedColor;
let numCircles;

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function generateRandomHexColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generateRandomColors(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(generateRandomColor());
    }
    return arr;
}

function setupDifficulty() {
    const difficulty = document.getElementById("difficulty").value;
    if (difficulty === "easy") 
    {
        numCircles = 3;
    } else if (difficulty === "brainLess") 
    {
        numCircles = 1;
    } else if (difficulty === "medium") 
    {
        numCircles = 6;
    } else if (difficulty === "hard") 
    {
        numCircles = 12;
    } else if (difficulty === "summer of69") 
    {
        numCircles = 69;
    } else {
        numCircles = 500;
    }
}

function startGame() {
    setupDifficulty();
    colors = generateRandomColors(numCircles);
    pickedColor = colors[Math.floor(Math.random() * numCircles)];
    document.getElementById("colorDisplay").textContent = pickedColor;

    const gameContainer = document.getElementById("gameContainer");
    gameContainer.innerHTML = "";

    for (let i = 0; i < colors.length; i++) {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        circle.style.backgroundColor = colors[i];
        circle.addEventListener("click", function () {
            checkColor(this);
        });
        gameContainer.appendChild(circle);
    }
}

function checkColor(circle) {
    const clickedColor = circle.style.backgroundColor;
    if (clickedColor === pickedColor) {
        alert("Jooo jde se pařit");
    } else {
        alert("Máš to blbě.");
    }
}

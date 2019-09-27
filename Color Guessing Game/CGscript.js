var numSquares = 6;
var colors = generateRandomColors(6);
var message = document.getElementById("message");
var resetButton = document.getElementById("reset");
var header = document.getElementById("header");
var easyBtn = document.getElementById("easy");
var hardBtn = document.getElementById("hard");


easyBtn.addEventListener("click", function () {
    this.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    header.style.backgroundColor = "steelblue";
    message.textContent = "";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i])
            squares[i].style.backgroundColor = colors[i];
        else
            squares[i].style.display = "none";
    }
});

hardBtn.addEventListener("click", function () {
    this.classList.add("selected");
    easy.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    header.style.backgroundColor = "steelblue";
    message.textContent = "";
    for (var i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function () {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    message.textContent = "";
    header.style.backgroundColor = "steelblue";
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
});

var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

var squares = document.querySelectorAll(".square");
for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            changeColor(pickedColor);
            message.textContent = "Correct";
            resetButton.textContent = "Play Again?";
            header.style.backgroundColor = pickedColor;
        }
        else {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again";
        }
    });
}
function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb("+ r +", "+ g +", "+ b +")";
}
function generateRandomColors(num) {
    var arr = [];
    for(var i=0; i<num; i++)
        arr.push(randomColor());
    return arr;
}

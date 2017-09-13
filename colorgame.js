var numSquares = 6
var colors= generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay= document.querySelector("#colordisplay");
var messagedisplay= document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn= document.querySelector("#easyBtn");
var hardBtn= document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3
	colors = generateRandomColors(numSquares);
	pickedColor= pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i<squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none"
		}
	}
})


hardBtn.addEventListener("click", function() {
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares=6
	colors = generateRandomColors(numSquares);
	pickedColor= pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i<squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display= "block";
	}
})

resetButton.addEventListener("click", function(){
	h1.style.backgroundColor = "steelblue";
	//generate new colors
	colors=generateRandomColors(numSquares);
	//pick new random color from array
	pickedColor=pickColor();
	//change text
	colorDisplay.textContent= pickedColor;
	// change colors of squares
	for (var i = 0; i<squares.length; i++) {
	//add initial colors to the squares
		squares[i].style.backgroundColor = colors[i];
	}
	this.textContent= "New Colors";
	messagedisplay.textContent = ""
})	



colorDisplay.textContent= pickedColor;

for (var i = 0; i<squares.length; i++) {
	//add initial colors to the squares
	squares[i].style.backgroundColor = colors[i];
	//adss click events
	squares[i].addEventListener("click", function() {
		// pick and then compare the color clicked
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			messagedisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor= clickedColor;
			resetButton.textContent= "Play Again?";
		}else {
			this.style.backgroundColor = "#232323";
			messagedisplay.textContent = "Try Again";
		}
	})
}

function changeColors(color) {
	//this changes colors for every of the squares
	for(var i = 0; i<squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	//used to pick target color from random colors
	var random = Math.floor((Math.random() * colors.length));
	return colors[random];
}

function generateRandomColors(num){
	// pick the 6 random colors
	var arr = [];
	for (var i = 0; i<num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	//create 1 random rgb style color
	var r=Math.floor((Math.random() * 256));
	var g=Math.floor((Math.random() * 256));
	var b=Math.floor((Math.random() * 256));
	return "rgb(" + r + ", " + g + ", " +b + ")";
}


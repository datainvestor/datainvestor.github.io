var numSquares = 6
var colors= []
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay= document.querySelector("#colordisplay");
var messagedisplay= document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var sidebar= document.querySelector(".side")
var modeButtons=document.querySelectorAll(".mode")
var htp=document.querySelector(".htp")


init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}


function setupSquares() {
		for (var i = 0; i<squares.length; i++) {
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
}


function setupModeButtons(){
		for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function (){
			modeButtons[0].classList.remove("selected")
			modeButtons[1].classList.remove("selected")
			this.classList.add("selected")
			if(this.textContent === "Easy") {
				numSquares = 3;
			} else {
				numSquares = 6;
			}
			reset();
		});
	}
}


function reset() {
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
		if(colors[i]) {
			squares[i].style.display= "block"
			squares[i].style.backgroundColor = colors[i];
		}else {
			squares[i].style.display= "none"
		}
	}
	resetButton.textContent= "New Colors";
	messagedisplay.textContent = ""
}


htp.addEventListener("click", function() {
	sidebar.classList.toggle("blank");
	list=document.querySelectorAll("li");
	for(var i = 0; i< list.length; i++) {
		list[i].classList.toggle("blank2");
	}
})

resetButton.addEventListener("click", function(){
	reset();
})	


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


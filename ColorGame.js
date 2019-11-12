var squareNum = 9;
var rgbRange = 256;
colors = generateRandomColor(squareNum);

var square       = document.querySelectorAll(".square");
var messageColor = document.querySelector("#messageColor");
var h1           = document.querySelector("h1");
var resetBtn = document.querySelector("#resetBtn");
var hardBtn  = document.querySelector("#hardBtn");
var easyBtn  = document.querySelector("#easyBtn");
var expertBtn   = document.querySelector("#expertBtn");

var pickedColor = pickColor(squareNum);
messageColor.textContent = pickedColor;
messageDisplay.textContent = "";
hardBtn.classList.add("selected");

for(var i = 0; i < colors.length; i++){
//give color to squares
	square[i].style.backgroundColor = colors[i];
//give addListener to squares
	square[i].addEventListener("click", function(){
		if(this.style.backgroundColor === pickedColor){
			for(var i = 0; i < square.length; i++){
				square[i].style.backgroundColor = pickedColor;
			}
			h1.style.backgroundColor = pickedColor;
			messageDisplay.textContent = "Correct!";
		} else{
			this.style.backgroundColor = "#272727";
			messageDisplay.textContent = "Try Again"
		}
	});
}

resetBtn.addEventListener("click", function(){
	messageDisplay.textContent = "";
	h1.style.backgroundColor =  "#16DB44"
	rgbRange = 256;
	colors = generateRandomColor(squareNum);
	pickedColor = pickColor(squareNum);
	messageColor.textContent = pickedColor;
	for(var i = 0; i < colors.length; i++){
		square[i].style.backgroundColor = colors[i];
	}
});

easyBtn.addEventListener("click", function(){
	messageDisplay.textContent = "";
	h1.style.backgroundColor = "#16DB44"
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	expertBtn.classList.remove("selected");

	squareNum = 3;
	rgbRange = 256;
	colors = generateRandomColor(squareNum);
	pickedColor = pickColor(squareNum);
	messageColor.textContent = pickedColor;
	for(var i = 0; i < square.length; i++){
		if(colors[i]){
			square[i].style.display = "block";
			square[i].style.backgroundColor = colors[i];	
		}
		else{
			square[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	messageDisplay.textContent = "";
	h1.style.backgroundColor = "#16DB44"
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	expertBtn.classList.remove("selected");

	squareNum = 6;
	rgbRange = 100;
	colors = generateRandomColor(squareNum);
	pickedColor = pickColor(squareNum);
	messageColor.textContent = pickedColor;
	for(var i = 0; i < colors.length; i++){
		if(colors[i]){
			square[i].style.display = "block";
			square[i].style.backgroundColor = colors[i];	
		}
		else{
			square[i].style.display = "none";
		}
	}
});

expertBtn.addEventListener("click", function(){
	messageDisplay.textContent = "";
	h1.style.backgroundColor = "#16DB44"
	hardBtn.classList.remove("selected");
	easyBtn.classList.remove("selected");
	expertBtn.classList.add("selected");

	squareNum = 9;
	rgbRange = 50; //set expert difficulty
	colors = generateRandomColor(squareNum);
	pickedColor = pickColor(squareNum);
	messageColor.textContent = pickedColor;

	for(var i = 0; i < colors.length; i++){
		if(colors[i]){
			square[i].style.display = "block";
			square[i].style.backgroundColor = colors[i];	
		}
		else{
			square[i].style.display = "none";
		}
	}
});


function pickColor(numInput){
	var num = Math.floor(Math.random() * (numInput));
	return colors[num];
}

function generateRandomColor(num){
	//generate random rgb color
	var arr = [];
	for (var i = 0; i < num; i++){
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);

		while(Math.abs(r-g) > rgbRange || Math.abs(g-b) > rgbRange || Math.abs(b-r) > rgbRange || Math.abs(r-g) == 0 || Math.abs(g-b) == 0 || Math.abs(b-r) == 0){
			var r = Math.floor(Math.random() * 256);
			var g = Math.floor(Math.random() * 256);
			var b = Math.floor(Math.random() * 256);
		}
		var rgb = "rgb(" + r + ", " + g + ", " + b +")"
	//push generated color to an array
		arr.push(rgb);	
	}
	return arr;
}



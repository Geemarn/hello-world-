var numOfBox = 6;
var colors;
var pickedColor ;
var colorBox = document.querySelectorAll("td");
var header = document.querySelector("header");
var headerText = document.querySelector("#headerText");
var navText = document.querySelector("#navText");
var newColorsBtn = document.querySelector("#newColor");
var Btns =document.querySelectorAll(".btns");
reset();
colorBoxSetUp();
btnsSetUp();
function colorBoxSetUp(){
	for(var i = 0; i< colorBox.length; i++){
	colorBox[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			changeColor(pickedColor);
			navText.textContent = "Correct";
			navText.style.color = "green" 
			header.style.backgroundColor = pickedColor;
			newColorsBtn.textContent = "Play again"
		}else {
			this.style.backgroundColor = "#232323";
			navText.textContent = "Try Again"; 
			navText.style.color = "red"
		}
});
};
};
function btnsSetUp(){
	for(var i = 0; i < Btns.length; i++){
		Btns[i].addEventListener("click", function(){
			Btns[0].classList.remove("clickedBtn");
			Btns[1].classList.remove("clickedBtn");
			Btns[2].classList.remove("clickedBtn");
			this.classList.add("clickedBtn");
			this.textContent === "Easy"? numOfBox = 3 : this.textContent === "Hard"? numOfBox = 6 : numOfBox = 9;
			reset();
		})
	};	
};
newColorsBtn.addEventListener("click", function(){
	reset();
});
function reset() {
	colors = generateColor(numOfBox);
	pickedColor = pickColor();
	headerText.textContent = pickedColor;
	header.style.backgroundColor = "steelblue";
	newColorsBtn.textContent = "New Colors";
	navText.textContent = "";
	for(var i = 0; i< colorBox.length; i++){
		if(colors[i]){
			colorBox[i].style.backgroundColor = colors[i];
			colorBox[i].style.display = "inline-block";
		}else {
			colorBox[i].style.display = "none";
		}
	}
};
function changeColor(color){
	for(var i = 0; i< numOfBox; i++){
		colorBox[i].style.backgroundColor = color;
	}
};
function pickColor(){
	var picked = Math.floor(Math.random()*numOfBox)
	return colors[picked];
};
function generateColor(numOfBox){
	var colorArr = [];
	for(var i = 0; i < numOfBox; i++){
		colorArr.push(randomColor());
	}
	return colorArr;
};
function randomColor(){
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	return "rgb(" + red +", "+ green + ", " + blue + ")";
}
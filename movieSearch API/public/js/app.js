var span = document.querySelector("span");
var button = document.querySelector("button");

setInterval(function(){
	span.style.color = randomColor();
	button.style.color = randomColor();
}, 1000)
function randNum(){
	var rand = Math.floor(Math.random()*15);
	return rand;
};
function randomColor(){
	var str = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
	var result = "#";
	for(var i = 0; i < 6; i++ ){
		result += str[randNum()];
	}
	return result;
}
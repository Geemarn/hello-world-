var game = {};
game.winningScore = 5;
game.player1score = 0;
game.player2score = 0;
game.gameOver = false;
game.plyr1score = document.querySelector("#plyr1score");
game.plyr2score = document.querySelector("#plyr2score");
game.player = document.querySelectorAll(".players");
game.reset = document.querySelector("#Reset");
game.winningScoreText = document.querySelector("#changeText");
game.container = document.querySelector(".container");
game.h1 = document.querySelector("h1");
game.input = document.querySelector("#input");
game.playerLogic = function (){
			for(var i = 0; i < game.player.length; i++){
				game.player[i].addEventListener("click", function(){
					if(!game.gameOver && this.textContent === "Player1"){
						game.player1score += 1;
						game.plyr1score.textContent = game.player1score;
						if(game.player1score === game.winningScore){
							game.plyr1score.classList.add("clss");
							game.h1.textContent = "Player1 wins!!";
							game.container.classList.add("cntnr");
							game.gameOver = true;
						}
					}else if(!game.gameOver && this.textContent === "Player2"){
						game.player2score += 1;
						game.plyr2score.textContent = game.player2score;
						if(game.player2score === game.winningScore){
							game.plyr2score.classList.add("clss");
							game.h1.textContent = "Player2 wins!!";
							game.container.classList.add("cntnr");
							game.gameOver = true;
					}	
					}
				});
			};
		};
game.resett = function (){
		game.player1score = 0;
		game.player2score = 0;
		game.plyr1score.textContent = game.player1score;
		game.plyr2score.textContent = game.player2score;
		game.plyr1score.classList.remove("clss");
		game.plyr2score.classList.remove("clss");
		game.h1.textContent = "Score Keeper!!";
		game.container.classList.remove("cntnr");
		game.gameOver = false;
	};
game.resetBtn = function(){
		game.reset.addEventListener("click", function(){
		game.resett();
	});
}	
game.inputFunc = function(){
	game.input.addEventListener("change", function(){
	game.winningScoreText.textContent = game.input.value;
	game.winningScore = Number(game.input.value);
	game.resett();
});
};
game.all = function(){
	game.playerLogic();
	game.resetBtn();
	game.inputFunc();
}
game.all();

function HangMan (){
	this.wordLib =['cat', 'dog', 'horse', 'bees'];
	this.win= 0;
	this.losses= 0;
	this.turns=0;
	this.correct = 0;
	this.incorrect =8;
	this.guesses = [];
	this.compChoice= (this.wordLib[Math.round(Math.random() * (this.wordLib.length-1))]).split('');
	this.html = '<p>Wins: '+this.win+"</p>"+
				"<p>Losses: "+this.losses+"</p>";
		document.querySelector('#record').innerHTML = this.html;

	this.GameSetup = function(){
		var html =		"<div class="+"'panel panel-default'"+">"+
						  "<div class="+"'panel-heading'"+">"+"Chances Left</div>"+
						  "<div class="+"'panel-body'"+">"+
						    this.incorrect+
						  "</div>"+
						"</div>"
							+
						"<div class="+"'panel panel-default'"+">"+
						  "<div class="+"'panel-heading'"+">"+"Letters Guessed</div>"+
						  "<div class="+"'panel-body'"+">"+
						    this.guesses+
						  "</div>"+
						"</div>"

			document.querySelector('#score').innerHTML = html;
		};

	this.boardSetup=function(){
		for(var i=0, n=this.compChoice.length; i<n; i++){
		this.gameBoard.push('_ ');
		}
		viewBoard=this.gameBoard.join("")

		var html = "<p>"+ viewBoard + "</p>";
		document.querySelector('#board').innerHTML = html;
		}

	this.EndGame= function(arr1, arr2){

			for(var i=0, n=arr1.length; i<n; i++){
			if(arr1[i] !== arr2[i]){
				return false;
			}
		}

		return true;
		}
	this.NewGame= function(){
		this.turns = 0;
		this.correct = 0;
		this.incorrect= 8;
		this.guesses = [];
		this.gameBoard=[];
		this.compChoice= (this.wordLib[Math.round(Math.random() * (this.wordLib.length-1))]).split('');
		this.boardSetup();

		var html = "<p> Score </p>" +

					"<p> correct: " + this.correct +"</p>"
					+
					"<p> incorrect: "+ this.incorrect +"</p>"
					+

					"<p>turns: " +this.turns +"</p>"
					+
					"<p>guesses: "+this.guesses+"</p>";

			document.querySelector('#score').innerHTML = html;

	}
	this.Play = function(){

		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		console.log(userGuess);
		console.log(board);

		if(this.guesses.indexOf(userGuess)>-1){
			}

			else{
				if(this.compChoice.indexOf(userGuess)>-1){
					this.guesses.push(userGuess);
					this.correct ++;
					console.log(this.guesses);
					for(var i=0, n=this.compChoice.length; i<n; i++){
						if(userGuess===this.compChoice[i]){
							viewBoard=viewBoard.split(' ');
							viewBoard[i]=userGuess;
							this.gameBoard[i]=userGuess;
							viewBoard=viewBoard.join(" ");
							console.log(this.gameBoard)
							var html = '<p>'+ viewBoard +"</p>";
							document.querySelector('#board').innerHTML = html;

					}//if
				}//for
			}//if
			else{
				this.guesses.push(userGuess);
				this.incorrect--;
				if(this.incorrect<1){
					console.log('lost')
					this.losses++;
					var html= "<p>Wins: "+this.wins+"</p>"+
						"<p>Losses: "+this.losses+"</p>";
					document.querySelector('#record').innerHTML = html;

					this.NewGame();

				}
			}
			this.GameSetup();
			if(this.EndGame(this.gameBoard, this.compChoice)==true){
				this.wins++;
				this.NewGame();
			}

			}//else
	}//ply

}

var test = new HangMan();
test.NewGame();

console.log(test.compChoice)

document.onkeyup= function(){
	test.Play();
	};
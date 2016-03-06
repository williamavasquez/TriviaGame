$(document).ready(function(){

	var QuesDisplayed = {
		question: "How old is your mom",
		choices:[10,20,30,50],
    answer: 40,
	};

// This button will start the game - execute the function
	$('button').on('click',play);
	
	// This is the game function, all the game will ocurre inside startGame
	function startGame(){
    // start the countdown - 30sec
    stopwatch.reset();
    // display the questions
	}

	// when the player begins the game, the start button will disapear 
	function play() {
		$('button').hide('<button>');
		startGame();
	};

// 30 second Clock
stopwatch = {
  time:0,
  reset:function(){
    stopwatch.time = 30;
    //change the "display" div to "00:30"
    $('#display').html("00:30");
    stopwatch.start();
    },
  start:function(){
    //Use setInterval to start the count here
      counter = setInterval(stopwatch.count,1000);
    },
  count: function(){
    stopwatch.time--;
    var counting= stopwatch.time;
    $("#display").html("00:"+counting);
    },
  };
// closing script bracket below
})
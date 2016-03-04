$(document).ready(function(){

	var QuesDisplayed = {
		question: "How old is your mom",
		ans1: "wrong",
		ans2:"wrong",
		ans3:"wrong",
		ans4:"right",
	};

// This button will start the game - execute the function
	$('button').on('click',play);
	
	// This is the game function, all the game will ocurre inside startGame
	function startGame(){
		console.log("this is the start of the game");

	}

	// when the player begins the game, the start will disapear 
	function play() {
		$('button').hide('<button>');
		startGame();
	};

stopwatch = {
  time:0,
  reset:function(){
    stopwatch.time = 0;
    $('#display').html("00:00");
    //change the "display" div to "00:00"
  	},
  start: function(){
      counter = setInterval(stopwatch.count,1000);
    //Use setInterval to start the count here
  	},
  count: function(){
    stopwatch.time++;
    var counting= stopwatch.timeConverter(stopwatch.time);
    $("#display").html(counting);
	  },
	timeConverter: function(t){
    //This function is done. You do not need to touch it. It takes the current time in seconds and converts it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t/60);
    var seconds = t - (minutes * 60);
    if (seconds < 10){
      seconds = "0" + seconds;
    }
    if (minutes === 0){
      minutes = "00";
    } else if (minutes < 10){
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  }
};

// closing script bracket below
})
$(document).ready(function(){

	 QuestionDisplayed = {
		question: "How old is your mom",
		choices:[10,20,30,70],
    answer: 30,
	};

// This button will start the game - execute the function
	   $('button').on('click',play);
	
	// This is the game function, all the game will ocurre inside startGame
	function startGame(){
    // start the countdown - 30sec
    countdown.reset();
  }
 // display the questions:
    $('#question').html(QuestionDisplayed.question)

 for (var i = 0; i < QuestionDisplayed.choices.length; i++) {
      var diego = ".answer"+[i];
       $('[data-trivia="' + [i] + '"]').html(QuestionDisplayed.choices[i]);
  };
  $(".answer").on('click',function(){
    // convert the answers into data to pull 
    SelectedAnswer = ($(this).data('trivia'));
    SelectedAnswer = parseInt(SelectedAnswer);
    if (QuestionDisplayed.choices[SelectedAnswer]===QuestionDisplayed.answer){
      console.log("Correct Answer");
    } else{
      console.log("wrong answer GERK!")
    }

  });
	// when the player begins the game, the start button will disapear 
	function play() {
		$('button').hide('<button>');
		startGame();
	};
// 30 second Clock
countdown = {
  time:0,
  reset:function(){
    countdown.time = 30;
    //change the "display" div to "00:30"
    $('#display').html("00:30");
    countdown.start();
    },
  start:function(){
    //Use setInterval to start the count here
      counter = setInterval(countdown.count,1000);
    },
  count: function(){
    countdown.time--;
    var counting= countdown.time;
    $("#display").html("00:"+counting);
    },
  };
// closing script bracket below
})
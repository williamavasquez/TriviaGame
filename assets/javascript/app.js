$(document).ready(function(){

  q1 = {
    question: "How old is your mom",
    choices:[10,20,30,70],
    answer: 30,
    };
  q2 = {
    question: "How old is your mom",
    choices:[100,200,300,700],
    answer: 30,
   };   
  q3 = {
    question: "How old is your mom",
    choices:[30,50,50,60],
    answer: 30,
    };
  q4 = {
    question: "How old is your mom",
    choices:["will","will","will","will"],
    answer: 30,
    };
  q5 = {
    question: "How old is your mom",
    choices:["Nam","Nam","Nam","Nam",],
    answer: 30,
    };
  q6 = {
    question: "How old is your mom",
    choices:["Cora","Cora","Cora","Cora",],
    answer: 30,
   };
  q7 = {
    question: "How old is your mom",
    choices:["Pollo","Pollo","Pollo","Pollo",],
    answer: 30,
    };
  q8 = {
    question: "How old is your mom",
    choices:[10,20,30,70],
    answer: 30,
    };
  q9 = {
    question: "How old is your mom",
    choices:[10,20,30,70],
    answer: 30,
   };
  q10 = {
    question: "How old is your mom",
    choices:[10,20,30,70],
    answer: 30,
    }

// Push all the Questions(object) into one array 
  TotalQs = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];

// // select a random Question
function RandomQuestion(){
  RandomValue = Math.floor((Math.random()*TotalQs.length))
  random = TotalQs[RandomValue];
  TotalQs.splice(RandomValue,1);

    // display the questions:
    $('#question').html(random.question);
    // display answers
     for (var i = 0; i < random.choices.length; i++) {
      $('[data-trivia="' + [i] + '"]').html(random.choices[i]);
      };
    // Pull the data to check if the answer is correct or not
   $(".answer").on('click',function(){
      SelectedAnswer = ($(this).data('trivia'));
      SelectedAnswer = parseInt(SelectedAnswer);
      
        if (random.choices[SelectedAnswer]===random.answer){
        console.log("Correct Answer");
        } else{
        console.log("wrong answer GERK!")
    }
  });
};

// This button will start the game - execute the function
     $('button').on('click',play);
  
  // This is the game function, all the game will ocurre inside startGame
  function startGame(){
    // start the countdown - 30sec
    countdown.reset();
    RandomQuestion();
    };
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
    var counting= countdown.time;
    if (countdown.time===0){
      startGame();
      clearInterval(counter);
    } else {
      countdown.time--;
    }
    $("#display").html("00:"+counting);
    },
  };

// closing script bracket below
})
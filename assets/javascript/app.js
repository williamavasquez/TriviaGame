$(document).ready(function(){
  $("#container").hide();

  q1 = {
    question: "On episode one, 'Days Gone By', Rick was in a gas station trying to look for fuel. He then saw a girl zombie. What did he do with the girl zombie?",
    choices:[" He filled her mouth with gas until she exploded","He shot her in the head using his gun","Rick used his car keys to stab her in the forehead","Rick tripped her and stomped her head"],
    answer: "He shot her in the head using his gun",
    };
  q2 = {
    question: 'On episode one, "Days Gone By", Rick managed to get out of the hospital. He then encountered two men, a father and son. What were the father and son\'s names?',
    choices:["James and Larry Benson","Harry and Jack Cox","Morgan and Duane Jones","Michael and Franzen Leitner"],
    answer: "Morgan and Duane Jones",
   };   
  q3 = {
    question: 'On episode one, "Days Gone By", Rick and the "Father and Son" realized they need firepower to be alive. Where did they go to find ammunition and guns?',
    choices:[" Marty Mulligan Gun Shop","The police station","The guard house","Morgan's cousin, Jim"],
    answer: "The police station",
    };
  q4 = {
    question: "On episode one, 'Days Gone By', When Rick ran out of gas, he used a horse as an alternative and continued his way to 'the safe zone', Atlanta where he found himself trapped with a hundred walkers. He was able to get inside a safe place. What or where was that safe place?",
    choices:["Gasoline truck","Coffee shop","Army tank","Security car"],
    answer: "Army tank",
    };
  q5 = {
    question: 'On episode two, "Guts", Rick and Glenn finally made it to the safe zone, the department store. In there, Rick was in a fight with Merle Dixon. Losing his temper, what did he do to Merle?',
    choices:["Rick used his taser against Merle","Rick used his baton to beat up Merle","He broke Merle's arms and pushed him on the floor","He handcuffed Merle in a metal pipe",],
    answer: "He handcuffed Merle in a metal pipe",
    };
  q6 = {
    question:  'In episode two, "Guts", Glenn and Rick tried to do a rescue. Rick used the box truck while Glenn used another car\s alarm to distract the walkers. What was the car Glenn used?',
    choices:["red Volkswagen","police cruiser","Dodge Challenger","An F1 racecar",],
    answer: "Dodge Challenger",
   };
  q7 = {
    question:  'In the third episode, "Tell it to The Frogs", while Rick, Glenn, Daryl, and T-Dog went back to the mart to rescue Merle, a fight broke in the camp. Who triggered the tension?',
    choices:["Ed","Carl","Lori","Ellen",],
    answer: "Ed",
    };
  q8 = {
    question:  'In the third episode, "Tell it to The Frogs", the rescue team of Rick, Glenn, Daryl, and T-Dog finally reached the rooftop where Merle was handcuffed. They were surprised to see... what on the rooftop?',
    choices:["Merle who was then a zombie","Merle's corpse surrounded by vultures","an amputated hand on the floor","a dozen of walkers"],
    answer: "an amputated hand on the floor",
    };
  q9 = {
    question:  'In the episode "Vatos", the rescue team decided to go back to the camp but before that, they tried to retrieve Rick\'s bag-full of guns and ammo that he dropped near the tank. A member of the rescue team was kidnapped by a group of men for them to have the guns. Who was the kidnapped rescue team member?',
    choices:[" Daryl"," T-Dog","Glenn","Rick"],
    answer: "Glenn",
   };
  q10 = {
    question: "Daryl was very useful with his team because of his weapon. What was his 'silent' weapon?",
    choices:["Spear","Dagger","Crossbow","Taekwondo"],
    answer: "Crossbow",
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
};

    // Pull the data to check if the answer is correct or not
   $(".answer").on('click',function(){
      SelectedAnswer = ($(this).data('trivia'));
      SelectedAnswer = parseInt(SelectedAnswer);
      
        if (random.choices[SelectedAnswer]===random.answer){
          debugger;
          alert("You got it Right!");
          RandomQuestion();
          countdown.time=30;
      } else{
        debugger;
          alert("Wrong Answer, the correct answer was " + random.answer);
          RandomQuestion();
          countdown.time=30;
      }
  });

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
    $("#container").show(1000);
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
    counter = setTimeout(countdown.count,1000);
    },
  count: function(){
    var counting= countdown.time;
    $("#display").html("00:"+counting);
    if (TotalQs.length===0){
      reseter();
    } else if (countdown.time===0){
      startGame();
    } else {
      countdown.time--;
      counter = setTimeout(countdown.count,1000);
    };
    },
  };

function reseter(){
    $("#container").hide();
    TotalQs = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];
    countdown.time=30;
    $('button').show(2000); 
    alert("Game is Over")
}
// closing script bracket below
})


// y = setTimeout(countdown.count,1000);
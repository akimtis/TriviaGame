//1.establish variables for timer, correct and incorrect answers, and number unanswered questions
//2.create arrays for questions, choices, and answer
//3.determine which choices are correct
//4. build a timer for each question
//5. represent each question and its corresponding choices on click
//6. start timer on click
//7. listen for chosen answer click and comapre answer to the correct choice
//8. if correct, display correct and the answer, then interval correct answer by one
//9. if incorrect, display incorrect and the answer, then interval incorrect answer by one
//10. after displaying answer for a time, present the next part of the arrays for questions and choices
//11. restart timer automatically
//12. repeat steps 7-11 until the arrays have been run through
//13. display final screen with correct guesses, incorrect guesses, number of unanswered guesses, and start over button.
//14. page does not reload on clicking start over, but resets the game instead.
$('#start').on("click", function(){
  trivia.start();
})

$(document).on('click', '#finished', function(){
  trivia.done();
})

var questions = [{
    question: "1) The Chihuahuan Desert has...",
    answers: ["the greatest number of aquatic species of any desert",
      "the greatest number of mammal species of any desert",
      "the greatest number of reptile species of any desert",
      "the greatest number of plant speices of any desert"],
    correctanswer: "the greatest number of aquatic species of any desert"
}, {
    question: "2) The Chihuahuan Desert is located ...",
    answers: ["beside a small annoying dog",
      "in the state of Chihuahua, Mexico, and parts of the southern New Mexico",
      "in Canada",
      "mostly in California and Arizona"],
    correctanswer: "in the state of Chihuahua, Mexico, and parts of the southern New Mexico"
}, {
    question: "3) The defense mechanisms of the Texas Horned Lizard does NOT include ...",
    answers: ["spines on its body",
      "the ability to camoflage with desert sand",
      "the ability to shoot blood from its eyes",
      "a bacteria-laden bite"],
    correctanswer: "the ability to shoot blood from its eyes"
}, {
    question: "4) Cactus have the following adaptations for saving water EXCEPT...",
    answers: ["Preforming photosynthesis at night",
      "Attracting animals to live in thier structure",
      "Expanding their sturcture to store water"],
    correctanswer: "Attracting animals to live in thier structure"
}, {
    question: "5) Many of the animals in the desert are active at twilight. This means they are...",
    answers: ["nocturnal", "diurnal", "crepuscular", "sleepy"],
    correctanswer: "crepuscular"
}];



// var trivia = {
//   counter: 30,
//   correct: 0,
//   incorrect: 0,
//   countdown: function(){
//     trivia.counter--;
//     $('#counter').html(trivia.counter);
//     if(trivia.counter<=0){
//       console.log("time is up!");
//       trivia.done();
//     }
//   },
  start: function(){
    timer = setInterval(trivia.countdown, 1000);
    $('subwrapper').append('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
    $('#start').on("click", function(){
      console.log("clicked")
      $('#start').remove();
        for (var i=0; i<questions.length; i++){
        $('subwrapper').append('<h2>'+questions[i].question+'</h2>');
          for(var j=0; j<questions[i].answers.length; j++){
          $('subwrapper').append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
          }
        };
    console.log(questions[i]);
    })
//     $('#subwrapper').append('<br><button id="finished">Finished</button>');
//   },
//   done: function(){
//     $.each($('input[name="question-0"]:checked'), function(){
//       if($(this).val()==questions[0].correctanswer){
//         game.correct++;
//       } else {
//         game.incorrect++;
//       }
//     });
//     $.each($('input[name="question-1"]:checked'), function(){
//       if($(this).val()==questions[1].correctanswer){
//         game.correct++;
//       } else {
//         game.incorrect++;
//       }
//     });
//     $.each($('input[name="question-2"]:checked'), function(){
//       if($(this).val()==questions[2].correctanswer){
//         game.correct++;
//       } else {
//         game.incorrect++;
//       }
//     });
//     $.each($('input[name="question-3"]:checked'), function(){
//       if($(this).val()==questions[3].correctanswer){
//         game.correct++;
//       } else {
//         game.incorrect++;
//       }
//     });
//     $.each($('input[name="question-4"]:checked'), function(){
//       if($(this).val()==questions[4].correctanswer){
//         game.correct++;
//       } else {
//         game.incorrect++;
//       }
//     });
//     this.result();
//   },
// result: function(){
//   clearInterval(timer);
//   $('#subwrapper h2').remove();
//   $('#subwrapper').html("<h2> You Are Finished </h2>");
//   $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
//   $('#subwrapper').append("<h3>Incorrect Answers: "+this.correct+"</h3>");
//   $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
// }
// }




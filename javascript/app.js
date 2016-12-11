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


var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timerNumber = 30;
var counter;
var questionNumber = 0;
var userClick = $(".userChoice").on("click", this)

var questions = [{
    question: "1) The Chihuahuan Desert has...",
    choices: ["the greatest number of aquatic species of any desert",
      "the greatest number of mammal species of any desert",
      "the greatest number of reptile species of any desert",
      "the greatest number of plant speices of any desert"],
    answer: 1
}, {
    question: "2) The Chihuahuan Desert is located ...",
    choices: ["beside a small annoying dog",
      "in the state of Chihuahua, Mexico, and parts of the southern New Mexico",
      "in Canada",
      "mostly in California and Arizona"],
    answer: 1
}, {
    question: "3) The defense mechanisms of the Texas Horned Lizard does NOT include ...",
    choices: ["spines on its body",
      "the ability to camoflage with desert sand",
      "the ability to shoot blood from its eyes",
      "a bacteria-laden bite"],
    correctAnswer: 3
}, {
    question: "4) Cactus have the following adaptations for saving water EXCEPT...",
    choices: ["Preforming photosynthesis at night",
      "Attracting animals to live in thier structure",
      "Expanding their sturcture to store water"],
    answer: 1
}, {
    question: "6) Many of the animals in the desert are active at twilight. This means they are...",
    choices: ["nocturnal", "diurnal", "crepuscular", "hungry"],
    answer: 2
}];

var currentQuestion = function(num) {
   runTimer()
    $("#questions").append(questions[num].question);
    $("#choices1").append(questions[num].choices[0]);
    $("#choices2").append(questions[num].choices[1]);
    $("#choices3").append(questions[num].choices[2]);
    $("#choices4").append(questions[num].choices[3]);
  var timeout = setTimeout(function(),30000);
} 

// var currentAnswer = function(num) {
//  if (userClick == questions[num].answer) {
//   wins++;
//   console.log("Correct!");
 
//   }
  
//   if (userClick != questions[num].answer) {
//   losses++;
//   console.log("Incorrect!");
//   }
  
//   if (timeout) {
//     unanswered ++;
//   } 
// }



var runTimer = function() {
      counter = setInterval(decrement, 1000);
    }
    //  The decrement function.
    function decrement() {
      //  Decrease number by one.
      timerNumber--;
      //  Show the number in the #show-number tag.
      $("#timer").html("<h2>" + "Time Remaining: " + timerNumber + " seconds" + "</h2>");
      //  Once number hits zero...
      if (timerNumber === 0) {
        //  ...run the stop function.
        stop();
        
      }
    }

function stop() {
      //  Clears our "counter" interval.
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(counter);
    }
//on click listen and run funciton runQuiz, which creates divs for each question
//and buttons for each choice 

$(document).ready(function(){

$("#start").on("click", currentQuestion(questionNumber));



})

$("#")

// function runQuiz(){
          

  //$(#questions).empty();

  // for (i=0; i<questions.length; i++) {
  //   var a = $("<h1>");
  //     // Adding a class of movie to our button
  //         a.addClass("question");
  //         // Adding a data-attribute
  //         a.attr("data-name", questions[i].question);
  //         // Providing the initial button text
  //         a.text(questions[i]);
  //         // Adding the button to the HTML
  //         $("#questions").append(a);
  //         console.log(questions[i].question)
  //   }
  
  // for(j=0; j<questions.choices.length; j++) {
  //   var b = $("<button>");
  //     // Adding a class of movie to our button
  //         b.addClass("choice");
  //         // Adding a data-attribute
  //         b.attr("data-name", choices[j]);
  //         // Providing the initial button text
  //         b.text(choices[j]);
  //         // Adding the button to the HTML
  //         $("#questions").appendChild(b);
  //     }



 



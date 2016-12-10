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

var useranswers = [];
var answered = 0;

var questions = [];
var choices = [];
var answer = [];

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



$("#start").on("click", runTimer);

function runTimer() {
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
        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }

function stop() {
      //  Clears our "counter" interval.
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(counter);
    }
//on click listen and run funciton runQuiz
$("#start").on("click", runQuiz, runTimer, stop);

function runQuiz(){

  $(#questions).empty();

  for (i-0; i<questions.length; i++) {
    var a = $("<button>");
      // Adding a class of movie to our button
          a.addClass("question");
          // Adding a data-attribute
          a.attr("data-name", question[i]);
          // Providing the initial button text
          a.text(question[i]);
          // Adding the button to the HTML
          $("#questions").append(a);
        }
  
  for(j=0; j<choices.length; j++) {
    var b = $("<button>");
      // Adding a class of movie to our button
          b.addClass("question");
          // Adding a data-attribute
          b.attr("data-name", choices[j]);
          // Providing the initial button text
          b.text(choices[j]);
          // Adding the button to the HTML
          $("#questions").appendChild(b);
      }
  
  console.log(runQuiz)
  $(#questions).append('<p class="question">' + "questions[i]" + "</p>");
  $(#questions).appendChild("<p class="choice">" + "choices[i]" + "</p>");
}
 
if (userClick == answer) {
  wins++;
  alert("Correct!");
 
  //refresh()
  }
  
  if (userClick != answer) {
  losses++;
  alert("Incorrect!");

  };


$(document).on("click", ".question", runQuiz);


// function renderQuiz() {
//   for(i=0;i<questions.length;i++) {
//     document.writeln('<p class="question">' + questions[i] + ' <span id="result_' + i + '"><img src="blank.gif" style="border:0" alt="" /></span></p>');
//     for(j=0;j<choices[i].length;j++) {
//       document.writeln('<input type="radio" name="answer_' + i + '" value="' + choices[i][j] + '" id="answer_' + i + '_' + j + '" class="question_' + i + '" onclick="submitAnswer(' + i + ', this, \'question_' + i + '\', \'label_' + i + '_' + j + '\')" /><label id="label_' + i + '_' + j + '" for="answer_' + i + '_' + j + '"> ' + choices[i][j] + '</label><br />');
//     }
//   }
//   document.writeln('<p><input type="submit" value="Show Score" onclick="showScore()" /> <input type="submit" value="Reset Quiz" onclick="resetQuiz(true)" /></p><p style="display:none"><img src="correct.gif" style="border:0" alt="Correct!" /><img src="incorrect.gif" style="border:0" alt="Incorrect!" /></p>');
// }
// function resetQuiz(showConfirm) {
//   if(showConfirm)
//     if(!confirm("Are you sure you want to reset your answers and start from the beginning?"))
//       return false;
//   document.location = document.location;
// }
// function submitAnswer(questionId, obj, classId, labelId) {
//   useranswers[questionId] = obj.value;
//   document.getElementById(labelId).style.fontWeight = "bold";
//   disableQuestion(classId);
//   showResult(questionId);
//   answered++;
// }
// function showResult(questionId) {
//   if(answers[questionId] == useranswers[questionId]) {
//     document.getElementById('result_' + questionId).innerHTML = '<img src="correct.gif" style="border:0" alt="Correct!" />';
//   } else {
//     document.getElementById('result_' + questionId).innerHTML = '<img src="incorrect.gif" style="border:0" alt="Incorrect!" />';
//   }
// }
// function showScore() {
//   if(answered != answers.length) {
//     alert("You have not answered all of the questions yet!");
//     return false;
//   }
//   questionCount = answers.length;
//   correct = 0;
//   incorrect = 0;
//   for(i=0;i<questionCount;i++) {
//     if(useranswers[i] == answers[i])
//       correct++;
//     else
//       incorrect++;
//   }
//   pc = Math.round((correct / questionCount) * 100);
//   alertMsg = "You scored " + correct + " out of " + questionCount + "\n\n";
//   alertMsg += "You correctly answered " + pc + "% of the questions! \n\n";
//   if(pc == 100)
//     alertMsg += response[0];
//   else if(pc >= 90)
//     alertMsg += response[1];
//   else if(pc >= 70)
//     alertMsg += response[2];
//   else if(pc > 50)
//     alertMsg += response[3];
//   else if(pc >= 40)
//     alertMsg += response[4];
//   else if(pc >= 20)
//     alertMsg += response[5];
//   else if(pc >= 10)
//     alertMsg += response[6];
//   else
//     alertMsg += response[7];
//   if(pc < 100) {
//     if(confirm(alertMsg))
//       resetQuiz(false);
//     else
//       return false;
//   } else {
//     alert(alertMsg);
//   }
// }
// function disableQuestion(classId) {
//   var alltags=document.all? document.all : document.getElementsByTagName("*")
//   for (i=0; i<alltags.length; i++) {
//     if (alltags[i].className == classId) {
//       alltags[i].disabled = true;
//     }
//   }
// }

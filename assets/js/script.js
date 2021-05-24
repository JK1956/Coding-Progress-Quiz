// Begin asking questions

var questions = [
    
    {
    question: "Commonly used data types DO NOT include:",
    answer1: "Strings",
    answer2: "Booleans",
    answer3: "Numbers",
    answer4: "Alerts",
    correct: "Alerts"
  }, {
    question: "The condition in an if / else statement is enclosed with ___________.",
    answer1: "Quotes",
    answer2: "Parenthesis",
    answer3: "Curly Brackets",
    answer4: "Square Brackets",
    correct: "Curly Brackets"
  }, {
    question: "Arrays in JavaScript can be used to store:",
    answer1: "Numbers and Strings",
    answer2: "Other Arrays",
    answer3: "Booleans",
    answer4: "All of the Above",
    correct: "All of the Above"
  }, {
    question: "String values must be enclosed within ______ when being assigned to variables.",
    answer1: "Quotes",
    answer2: "Paranthesis",
    answer3: "Curly Brackets",
    answer4: "Commas",
    correct: "Quotes"
  }, {
    question: "A very useful tool used during development and debugging for printing content into the debugger is:",
    answer1: "JavaScript",
    answer2: "console log",
    answer3: "terminal/bash",
    answer4: "for loops",
    correct: "console log"
  } 
]
;
  
  // Timer settings

  var time = document.getElementById("timer");
  var yourScore = document.querySelector(".display-3");
  var submitButton = document.getElementById("initials");
  var inputLine = document.getElementById("inlineFormInput");
  
  var secondsLeft = 40;
  function setTime() {
      var timerInterval = setInterval(function() {
        secondsLeft--;
        console.log(secondsLeft);
          time.textContent = "Time: " + secondsLeft;
        
          if(secondsLeft === 0) {
            clearInterval(timerInterval);
            cardQuestions.setAttribute("style", "display: none");
            displayJumbo.setAttribute("style", "display: block");
            yourScore.textContent = "Your score is: " + secondsLeft;
            startButton.setAttribute("style", "display: none");
            submitButton.setAttribute("style", "display: inline");
            inputLine.setAttribute("style", "display: inline-block");
        
            } else if (runningQuestion === 5) {
              clearInterval(timerInterval);
              console.log(secondsLeft);
              cardQuestions.setAttribute("style", "display: none");
              displayJumbo.setAttribute("style", "display: block");
              yourScore.textContent = "Your score is: " + secondsLeft;
              startButton.setAttribute("style", "display: none");
              submitButton.setAttribute("style", "display: inline");
              inputLine.setAttribute("style", "display: inline-block");
  
            }
          
            
  
      }, 1000);
    }
    
  
  // Begin quiz

  var startButton = document.getElementById("startQuiz");
  var cardQuestions = document.getElementById("question-intro");
  var displayJumbo = document.querySelector(".jumbotron");
  
  startButton.addEventListener("click", startGame);
  
  function startGame() {
      setTime();
      firstQuestion();
      console.log("let's goooo");
      cardQuestions.setAttribute("style", "display: block");
      displayJumbo.setAttribute("style", "display: none");
  
  }
  
  
  //Questions and Answers

  var answer1 = document.getElementById("button1");
  var answer2 = document.getElementById("button2");
  var answer3 = document.getElementById("button3");
  var answer4 = document.getElementById("button4");
  var question = document.getElementById("questions");
  var correctAnswer = document.getElementById("correct-wrong");
  var incorrectAnswer = document.getElementById("correct-wrong");
  
  var runningQuestion = 0;

  function firstQuestion() {
    var quest = questions[runningQuestion];
    question.textContent = quest.question;
    answer1.textContent = quest.answer1;
    answer2.textContent = quest.answer2;
    answer3.textContent = quest.answer3;
    answer4.textContent = quest.answer4;
  }
  var quizBtn = document.querySelectorAll(".quiz-btn");
  
  // Event listener for buttons and questions

  for (var i = 0; i < quizBtn.length; i++) {
    quizBtn[i].addEventListener("click", function userAnswer(event) {
      event.stopPropagation();
      if (event.currentTarget.innerText === questions[runningQuestion].correct){
      correctAnswer.textContent = "Correct + 5 sec";
      correctAnswer.setAttribute("style", "color: dark red");
      secondsLeft = secondsLeft + 5;
      console.log("correct + 5 seconds");
    } else {
      incorrectAnswer.textContent = "Incorrect - 15 sec";
      incorrectAnswer.setAttribute("style", "color: red");
      secondsLeft = secondsLeft - 15;
      console.log("Wrong - 15 seconds");
    }
    console.log(runningQuestion);
    runningQuestion++;
  
  
    if (runningQuestion < 5) {
      firstQuestion();
    }
  });
  }
  
  // Storing high scores 
  
  var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  
  submitButton.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("click");
    
    var initials = inputLine.value;
    var finalScore = {initials, secondsLeft};
    console.log("Final Score: " + finalScore);
    console.log(initials + " your score is: " + secondsLeft); 
  
  
  
  
    // Send to localStorage
  
    highscores.push(finalScore);
    localStorage.setItem("highscores", JSON.stringify(highscores));
  
  });
  
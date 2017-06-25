/******************************************************************************
Activity 5 - Vocab Quiz - Dynamically Generate HTML and Mark Correct/Incorrect
******************************************************************************/

var myQuestions = [{
    question: "1. What is a hacker?",
    answers: {
      a: 'A person that cuts down trees.',
      b: 'A website where one connects with those sharing personal or professional interests.',
      c: 'A popular term for someone who accesses computer information either legally or illegally.'
    },
    correctAnswer: 'c'
  },
  {
    question: "2. Define Piracy.",
    answers: {
      a: 'The unauthorized reproduction or copying of music, video, or literature without proper compensation or permission.',
      b: 'Taking credit for someone else\'s writing or ideas.',
      c: 'Pirates on the internet that steal information.'
    },
    correctAnswer: 'a'
  },
  {
    question: "3. What is cyber ethics?",
    answers: {
      a: 'Responsible rules and behaviors designed to keep individuals safe whenever connected to the Internet.',
      b: 'The informal code of positive conduct used whenever someone is connected to the Internet.',
      c: 'The protection of information and computer systems and networks while connected to the Internet.'
    },
    correctAnswer: 'b'
  },
  {
    question: "4. What is SPAM?",
    answers: {
      a: 'A short label that can be attached like a caption to a blog post, a photograph, or other content.',
      b: 'A brand of canned cooked meat made by Hormel Foods Corporation.',
      c: 'Electronic junk mail.'
    },
    correctAnswer: 'c'
  },
  {
    question: "5. What is cyberstalking?",
    answers: {
      a: 'Repeated harassment that includes threats of harm or that is highly intimidating and intrusive uponone\'s personal privacy.',
      b: 'The illegal act of sending emails or messages that appear to come from authentic sources, but really come from spammers.',
      c: 'The protection of information and computer systems and networks while connected to the Internet.'
    },
    correctAnswer: 'a'
  },
  {
    question: "6. Define grooming.",
    answers: {
      a: 'To look after the coat of an animal by brushing and cleaning it.',
      b: 'The process used by predators to gain the trust of victims and to build false relationships.',
      c: 'Preparing a person to behave properly on the internet.'
    },
    correctAnswer: 'b'
  }
];

var vocabQuizContainer = document.getElementById('vocabQuiz');
var resultsContainer = document.getElementById('vocabQuizResults');
var submitButton = document.getElementById('submitQuiz');


generateQuiz(myQuestions, vocabQuizContainer, resultsContainer, submitButton);

function generateQuiz(questions, vocabQuizContainer, resultsContainer, submitButton) {

  function showQuestions(questions, vocabQuizContainer) {
    var output = [];
    var answers;
    for (var i = 0; i < questions.length; i++) {
      answers = [];
      for (letter in questions[i].answers) {
        answers.push(
          '<ul>' +
          '<input type="radio" id="quizQuestions" name="question' + i + '" value="' + letter + '">' + ' ' + letter + ': ' + questions[i].answers[letter] +
          '</ul>'
        );
      }

      output.push(
        '<div class="question">' + '<strong>' + questions[i].question + '</strong>' + '</div>' + '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    vocabQuizContainer.innerHTML = output.join('');
  }


  function showResults(questions, vocabQuizContainer, resultsContainer) {
    var answerContainers = vocabQuizContainer.querySelectorAll('.answers');
    var userAnswer = '';
    var numCorrect = 0;
    for (var i = 0; i < questions.length; i++) {
      userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;
      if (userAnswer === questions[i].correctAnswer) {
        numCorrect++;
        answerContainers[i].style.color = '#449D44';
      } else {
        answerContainers[i].style.color = 'red';
      }
    }

    var percentCorrect = numCorrect / questions.length * 100;

    resultsContainer.innerHTML = '<div class ="well well-message">' + 'You got ' + numCorrect + ' out of ' + questions.length + ' answers correct! ' + 'That\'s ' + percentCorrect.toFixed(2) + '%' + '</div>';

  }



  showQuestions(questions, vocabQuizContainer);

  submitButton.onclick = function() {
    showResults(questions, vocabQuizContainer, resultsContainer);
  }
}

const readlineSync = require('readline-sync');


// TODO 2: modify your quiz app to ask 5 questions //



// TODO 1.1a: Define candidateName // 
let candidateName = " "; //Assigning empty string cause we will ask the user to enter name 
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";


//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];

let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  
    candidateName = readlineSync.question("What's your name? ");
  
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  
  for (let i = 0; i < questions.length; i++){
    console.log(`${i + 1}) ${questions[i]}`); // added template literal and {i + 1}) so that each outputs 1),2) etc
  candidateAnswers[i] = readlineSync.question("Your answer: ");  //asking users for answer
  }
  // gradeQuiz(candidateAnswers,i); //passing i in 
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  // for (i = 0; i < questions.length; i++){
  //   if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
  //     console.log("Correct!");
  //   } else {
  //     console.log("Incorrect!");
  //   }
  // }
  // console.log(`Your Answer: ${candidateAnswers[i]}`); //displays the users answer
  // console.log(`Correct Answer: ${correctAnswers[i]}`); //displays correct answer
  

//Replace the basic feedback from TODO 1.2c with a template literal that displays each of the candidate’s responses in 
//addition to the corresponding correct answers.

  let grade;  //TODO 3.2 use this variable to calculate the candidates score.
  let numCorrect = 0;
  for(let i = 0; i < questions.length; i++) {
    if(candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      numCorrect++;
    }
  
  console.log(`Your Answer: ${candidateAnswers[i]}`); //displays the users answer
  console.log(`Correct Answer: ${correctAnswers[i]}`); //displays correct answer
  
  
  }
  grade = (numCorrect/5) * 100;

  console.log(`Overall Grade: ${grade}% (${numCorrect} of 5 responses correct)`);
  
if (grade >= 80) {
  console.log(">>> Status: PASSED <<<");
} else {
  console.log(">>> Status: FAILED <<<");
}
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Candidate Name:" + candidateName); //displaying the name user entered
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};

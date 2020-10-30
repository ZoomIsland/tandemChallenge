const quizData = require('../Apprentice_TandemFor400_Data.json');
let questionsAsked = 0;

module.exports = {
  data: function () {
    let currentQuestion = quizData.pop();
    questionsAsked++;
    console.log(quizData.length);
    console.log(questionsAsked);
    return currentQuestion;
  }
}
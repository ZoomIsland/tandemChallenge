const quizData = require('../Apprentice_TandemFor400_Data.json');

// think about a test to make sure the data arrives as it should.
// should probably also test length to be 10+

module.exports = {
  data: function () {
    let changedData = [...quizData];
    changedData.forEach(question => {
      // assign question ids for sort/slice randomization
      question.id = Math.random();
      let answerArray = [];
      question.incorrect.forEach(iQ => {
        answerArray.push({
          answer: iQ,
          // assign question ids for sort randomization
          id: Math.random()
        })
      })
      answerArray.push(
        {
          answer: question.correct,
          // assign question ids for sort randomization
          id: Math.random()
        }
      )
      answerArray.sort((a, b) => {
        return a.id - b.id
      })
      question.answers = answerArray;
    })
    changedData.sort((a,b) => {
      return a.id - b.id
    })
    return changedData.slice(0,10);
    // console.log(changedData)
    // let currentQuestion = quizData.pop();
    // questionsAsked++;
    // console.log(quizData.length);
    // console.log(questionsAsked);
    // return currentQuestion;
  }
}
const quizData = require('../Apprentice_TandemFor400_Data.json');

// tests to ensure data is correct length
if (quizData.length < 10) {
  throw "The received data doesn't have enough questions."
}
// tests to ensure data is structured correctly
quizData.forEach((question, i) => {
  if (!question.question || !question.correct || !question.incorrect) {
    throw `The question at index ${i} of received data doesn't have the correct format. It should be \n{question: string, \nincorrect: array of strings, \ncorrect: string}`
  }
  if (typeof(question.question) !== "string") {
    throw `The question at index ${i} should be a string`
  }
  if (typeof(question.correct) !== "string") {
    throw `The correct answer at index ${i} should be a string`
  }
  if (!Array.isArray(question.incorrect)) {
    throw `The incorrect answers at index ${i} should be an array of strings`
  }
  question.incorrect.forEach(answer => {
    if (typeof(answer) !== "string") {
      throw `The incorrect answers at index ${i} should be an array of strings`
    }
  })
})


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
  }
}
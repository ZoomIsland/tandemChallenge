const express = require('express');
const app = express();

// const quizData = require('./Apprentice_TandemFor400_Data.json');
// console.log(quizData);


app.use(express.static('./'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home')
})


const quizData = require('./scripts/quizData')
app.get('/question', (req, res) => {
  res.render('question', {
    questions: quizData.data()
  })
})


app.listen(3000, () => {
  console.log('listening')
})
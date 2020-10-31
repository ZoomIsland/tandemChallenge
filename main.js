const express = require('express');
const app = express();

app.use(express.static('./'));

app.set('view engine', 'ejs');

const quizData = require('./scripts/quizData')
app.get('/', (req, res) => {
  res.render('home', {
    questions: quizData.data()
  })
})

app.listen(3000, () => {
  console.log('listening')
})